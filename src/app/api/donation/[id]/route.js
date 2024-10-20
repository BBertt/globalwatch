import { connectToDB } from "@/utils/database";
import Donation from "@/models/donation";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const donation = await Donation.findById(params.id);

    if (!donation) return new Response("Donation not found.", { status: 404 });

    return new Response(JSON.stringify(donation), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch donation.", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    const donation = await Donation.findById(params.id);

    if (!donation) return new Response("Donation not found", { status: 404 });

    if (typeof donation.raisedAmount === "undefined") {
      donation.raisedAmount = 0;
    }

    const { amount } = await request.json();
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount)) {
      return new Response("Invalid amount", { status: 400 });
    }

    donation.raisedAmount += parsedAmount;

    const updatedDonation = await donation.save();

    return new Response(JSON.stringify(updatedDonation), { status: 200 });
  } catch (error) {
    console.error("Error updating donation amount:", error);
    return new Response("Failed to update the donation amount", {
      status: 500,
    });
  }
};
