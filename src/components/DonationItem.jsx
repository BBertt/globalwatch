// components/DonationItem.js
import React, { useState } from "react";

const DonationItem = ({ donation, handleDonate }) => {
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    handleDonate(amount, notes);
  };

  return (
    <div
      className="bg-[url('/assets/donation/donation_bg.jpg')] bg-cover bg-center min-h-screen flex justify-center items-center"
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-2xl w-[40rem] h-auto flex flex-col justify-between items-center border-2 border-blue-500">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
            {donation.title}
          </h3>
          <p className="text-sm text-gray-600 text-center mb-4">
            Beneficiary: {donation.beneficiary}
          </p>
          <p className="text-sm text-gray-600 text-center mb-4">
            {donation.description}
          </p>
        </div>

        {/* Input for amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Input for notes */}
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add a note (optional)"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />

        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 mt-4"
          onClick={handleSubmit}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationItem;
