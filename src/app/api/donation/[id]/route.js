import { connectToDB } from "@/utils/database";
import Donation from "@/models/donation";

export const GET = async (request, { params }) => {
  try {
        await connectToDB();
        const donation = await Donation.findById(params.id);

        if (!donation) return new Response("Donation not found.", { status: 404 });

        return new Response(JSON.stringify(donation), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all donations.", { status: 500 });
    }
}