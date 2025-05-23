import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  maxAttendees: { type: Number, required: true },
});

export const Event =
  mongoose.models.Event || mongoose.model("Event", eventSchema);
