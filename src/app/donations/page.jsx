"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import DonationList from '@/components/DonationList';

const donations = () => {
  const router = useRouter();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch("/api/donation", {
        method: "GET",
        cache: "no-store",
      });
      const data = await response.json();
      setDonations(data);
    };

    fetchDonations();
  }, []);

  const handleView = (donation) => {
    router.push(`/donation-view?id=${donation._id}`);
  }
  return (
    <div>
        <DonationList 
          data = {donations}
          handleView = {handleView}
        />
    </div>
  )
}

export default donations;