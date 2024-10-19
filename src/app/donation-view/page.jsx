"use client";

import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import DonationItem from "@/components/DonationItem";

const page = () => {
    const searchParams = useSearchParams();
    const donationId = searchParams.get('id');

    const [donation, setDonation] = useState({
        beneficiary: '',
        description: '',
        title: '',
    });

    useEffect(() => {
      const getDonationItem = async() => {
        const response = await fetch(`/api/donation/${donationId}`);
        const data = await response.json();

        setDonation({
            beneficiary: data.beneficiary,
            description: data.description,
            title: data.title,
        });

        console.log(donation.title);
      }

      if (donationId) getDonationItem();
    }, [donationId]);
    

  return (
    <DonationItem 
        donation={donation}
    />
  )
}

export default page