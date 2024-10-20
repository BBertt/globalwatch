import { Schema, model, models } from "mongoose";

const DonationSchema = new Schema({
  beneficiary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  goalAmount: Number,
  raisedAmount: {
    type: Number,
    default: 0,
  },
});

const Donation = models.Donation || model("Donation", DonationSchema);

export default Donation;
