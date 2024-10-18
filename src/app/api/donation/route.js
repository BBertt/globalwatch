import { connectToDB } from "@/utils/database";
import Donation from "@/models/donation";

export const revalidate = 0; //Disable ISR, make sure it always fetch data.

export const GET = async(request) => {
    try {
        await connectToDB();
        const donations = await Donation.find({});

        return new Response(JSON.stringify(dontaions), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all donations.", { status: 500 });
    }
}