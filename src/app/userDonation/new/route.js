import { connectToDB } from "@/utils/database";
import UserDonation from "@/models/userDonation";

export const POST = async(request) => {
    const { userId, donationId, amount, notes } = await request.json();

    try {
        await connectToDB();

        const newUserDonation = new UserDonation({
            userId,
            donationId,
            amount,
            notes,
        });

        await newUserDonation.save();
        return new Response(JSON.stringify(newUserDonation), { status: 201 });
    } catch (error) {
        return new Response("Failed to create new User Donation.", { status: 500 });
    }
}