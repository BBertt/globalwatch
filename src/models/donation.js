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
    }
});

const Donation = models.Donation || model('Donation', DonationSchema);

export default Donation;