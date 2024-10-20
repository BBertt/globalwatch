"use client";

import UserDonationList from "@/components/UserDonationList";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";



const MyProfile = () => {
  const {data: session} = useSession();

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchUserDonations = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/donations`);
      const data = await response.json();
      setDonations(data);
    }

    if (session?.user.id) fetchUserDonations();
  }, [session?.user.id]);
  

  return (
    <div>
      <UserDonationList 
        donations = {donations}
      />
    </div>
  )
}

export default MyProfile