"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import DonationItem from "@/components/DonationItem";

const page = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const donationId = searchParams.get('id');

    const [donation, setDonation] = useState({
        beneficiary: '',
        description: '',
        title: '',
    });

    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
      const getDonationItem = async() => {
        const response = await fetch(`/api/donation/${donationId}`);
        const data = await response.json();

        setDonation({
            beneficiary: data.beneficiary,
            description: data.description,
            title: data.title,
        });

      }

      if (donationId) getDonationItem();
    }, [donationId]);

    const [userDonation, setUserDonation] = useState({
      amount: "",
      notes: "",
    });

    const handleDonate = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      try {
        const response = await fetch('api/userdonation/new', {
          method: 'POST',
          body: JSON.stringify({
            userId: session?.user.id,
            donationId: donationId,
            amount: userDonation.amount,
            notes: userDonation.notes,
          })
        });

        if (response.ok) {
          router.push('/');
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
  )
}

export default page