import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  attendeeId: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  ticketPrice: { type: Number, required: true },
});

export const Registration =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);
