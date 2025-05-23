import { Event } from "../schemas/event.schema.js";
import { Registration } from "../schemas/registration.schema.js";
export const seedData = async () => {
  try {
    const eventCount = await Event.countDocuments();
    if (eventCount > 0) return;

    const events = [
      {
        name: "Summer Music Festival",
        category: "concert",
        date: new Date("2025-07-15"),
        venue: "Central Park",
        maxAttendees: 50,
      },
      {
        name: "JavaScript Workshop",
        category: "workshop",
        date: new Date("2025-06-10"),
        venue: "Tech Hub",
        maxAttendees: 15,
      },
      {
        name: "Art Exhibition Opening",
        category: "exhibition",
        date: new Date("2025-05-20"),
        venue: "City Gallery",
        maxAttendees: 30,
      },
      {
        name: "React Conference",
        category: "conference",
        date: new Date("2025-08-22"),
        venue: "Convention Center",
        maxAttendees: 200,
      },
      {
        name: "Photography Workshop",
        category: "workshop",
        date: new Date("2025-06-25"),
        venue: "Studio One",
        maxAttendees: 12,
      },
    ];

    const insertedEvents = await Event.insertMany(events);
    console.log("Events inserted:", insertedEvents.length);

    const registrations = [
      {
        eventId: insertedEvents[0]._id,
        attendeeId: "ATT001",
        ticketPrice: 75.0,
      },
      {
        eventId: insertedEvents[0]._id,
        attendeeId: "ATT002",
        ticketPrice: 75.0,
      },
      {
        eventId: insertedEvents[1]._id,
        attendeeId: "ATT003",
        ticketPrice: 120.0,
      },
    ];

    const insertedRegistrations = await Registration.insertMany(registrations);
    console.log("Registrations inserted:", insertedRegistrations.length);
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
