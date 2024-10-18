import { Schema, models, model } from "mongoose";

const UserDonationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
    },
    donationId: {
        type: Schema.Types.ObjectId,
        ref: 'Donation',
    },
    amount: {
        type: Number,
        required: true,
    },
    notes: {
        type: String,
    },
});

const UserDonation = models.UserDonation || model('UserDonation', UserDonationSchema);

export default UserDonation;