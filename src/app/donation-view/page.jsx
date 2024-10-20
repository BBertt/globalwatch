"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { signIn, getProviders } from "next-auth/react";

import DonationItem from "@/components/DonationItem";

const DonationView = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const donationId = searchParams.get("id");

  const [donation, setDonation] = useState({
    beneficiary: "",
    description: "",
    title: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    if (!session && status != "loading") setUpProviders();
  }, [session, status]);

  useEffect(() => {
    const getDonationItem = async () => {
      try {
        const response = await fetch(`/api/donation/${donationId}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const text = await response.text();
        if (!text) {
          throw new Error("No response from server.");
        }

        const data = JSON.parse(text);

        setDonation({
          beneficiary: data.beneficiary,
          description: data.description,
          title: data.title,
        });
      } catch (error) {
        console.error("Failed to fetch donation item:", error.message);
      }
    };

    if (donationId) getDonationItem();
  }, [donationId]);

  const [userDonation, setUserDonation] = useState({
    amount: "",
    notes: "",
  });

  const handleDonate = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!session) {
      if (providers) {
        signIn(Object.keys(providers)[0]);
      }
      return;
    }

    try {
      const response = await fetch("api/userdonation/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          donationId: donationId,
          amount: userDonation.amount,
          notes: userDonation.notes,
        }),
      });

      if (response.ok) {
        const updateResponse = await fetch(`/api/donation/${donationId}`, {
          method: "PATCH",
          body: JSON.stringify({
            amount: userDonation.amount,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (updateResponse.ok) {
          console.log("Donation amount successfully updated!");
          router.push("/profile");
        } else {
          console.error("Failed to update donation amount");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DonationItem
      donation={donation}
      userDonation={userDonation}
      setUserDonation={setUserDonation}
      submitting={submitting}
      handleDonate={handleDonate}
    />
  );
};

export const DonationViewPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonationView />
    </Suspense>
  );
}
