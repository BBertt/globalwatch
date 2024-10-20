"use client";

import UserDonationList from "@/components/UserDonationList";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";



const MyProfile = () => {
  const {data: session} = useSession();

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDonations = async () => {
      try {
        const response = await fetch(`/api/user/${session?.user.id}/donations`);
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations.", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user.id) fetchUserDonations();
  }, [session?.user.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Image
            src="/assets/icons/loader.svg"
            width={50}
            height={50}
            alt="loader"
            className="mx-auto object-contain"
          />
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <UserDonationList 
        donations = {donations}
      />
    </div>
  )
}

export default MyProfile