import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import { seedData } from "./config/seed.js";
import connectDB from "./config/db.js";
import { Event } from "./schemas/event.schema.js";
import { Registration } from "./schemas/registration.schema.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.post("/api/events", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: "Event with this name already exists" });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
});

app.get("/api/events/category/:category/after-date", async (req, res) => {
  try {
    const { category } = req.params;
    const afterDate = new Date("2025-06-01");

    const events = await Event.find({
      category: category.toLowerCase(),
      date: { $gt: afterDate },
    }).sort({ date: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch("/api/events/:id/increase-capacity", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { $inc: { maxAttendees: 10 } },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/events/name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const deletedEvent = await Event.findOneAndDelete({ name });

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    await Registration.deleteMany({ eventId: deletedEvent._id });

    res.json({
      message: `Event "${name}" deleted successfully`,
      deletedEvent,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/analysis/small-events", async (req, res) => {
  try {
    const smallEvents = await Event.find({ maxAttendees: { $lt: 20 } });
    res.json({
      count: smallEvents.length,
      events: smallEvents,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/analysis/revenue/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ error: "Event not found" });

    const revenueData = await Registration.aggregate([
      {
        $match: { eventId: new mongoose.Types.ObjectId(eventId) },
      },
      {
        $group: {
          _id: "$eventId",
          totalRevenue: { $sum: "$ticketPrice" },
          totalRegistrations: { $sum: 1 },
          averageTicketPrice: { $avg: "$ticketPrice" },
        },
      },
    ]);

    if (revenueData.length === 0) {
      return res.json({
        eventName: event.name,
        totalRevenue: 0,
        totalRegistrations: 0,
        averageTicketPrice: 0,
      });
    }

    const result = revenueData[0];
    res.json({
      eventName: event.name,
      totalRevenue: parseFloat(result.totalRevenue.toFixed(2)),
      totalRegistrations: result.totalRegistrations,
      averageTicketPrice: parseFloat(result.averageTicketPrice.toFixed(2)),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/registrations", async (req, res) => {
  try {
    const registrations = await Registration.find().populate("eventId");
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/registrations", async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/events/with-registrations", async (req, res) => {
  try {
    const events = await Event.aggregate([
      {
        $lookup: {
          from: "registrations",
          localField: "_id",
          foreignField: "eventId",
          as: "registrations",
        },
      },
      {
        $addFields: {
          currentAttendees: { $size: "$registrations" },
          availableSpots: {
            $subtract: ["$maxAttendees", { $size: "$registrations" }],
          },
        },
      },
      {
        $sort: { date: 1 },
      },
    ]);

    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const startServer = async () => {
  try {
    await connectDB();
    await seedData();

    app.listen(PORT, () => {
      console.log(`Event Management Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
