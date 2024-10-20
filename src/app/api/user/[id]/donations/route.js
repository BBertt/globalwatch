import { connectToDB } from "@/utils/database";
import UserDonation from "@/models/userDonation";
import Donation from "@/models/donation";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const userDonations = await UserDonation.find({ userId: params.id });

    if (!userDonations || userDonations.length === 0) {
      return new Response("No donations found for this user.", { status: 404 });
    }

    const donationPromises = userDonations.map(async (userDonation) => {
      const donation = await Donation.findById(userDonation.donationId);
      return {
        userDonation,
        donation,
      };
    });

    const donationsDetails = await Promise.all(donationPromises);
    return new Response(JSON.stringify(donationsDetails), { status: 200 });
  } catch (error) {
    return new Response("Faled to fetch all prompts.", { status: 500 });
  }
};
