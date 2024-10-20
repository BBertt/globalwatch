const DonationItem = ({ donation, userDonation, setUserDonation, submitting, handleDonate }) => {

  return (
    <div
      className="bg-[url('/assets/donation/donation_bg.jpg')] bg-cover bg-center min-h-screen flex justify-center items-center"
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-2xl w-[60rem] h-auto flex flex-col justify-between items-center border-2 border-blue-500">
        <div className="flex flex-col justify-center items-center">
          <h1 className="head_text text-center mb-6">
            <span className="blue_gradient">{donation.title}</span>
          </h1>
          <p className="text-sm text-gray-600 text-center mb-4">
            Beneficiary: {donation.beneficiary}
          </p>
          <p className="text-sm text-gray-600 text-center mb-4">
            {donation.description}
          </p>
        </div>

        <input
          type="number"
          onChange={(e) => setUserDonation({...userDonation,
            amount: e.target.value})}
          placeholder="Enter amount"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          onChange={(e) => setUserDonation({...userDonation,
            notes: e.target.value})}
          placeholder="Add a note (optional)"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />

        <button
          className="bg-blue-600 text-white py-2 px-20 rounded-full hover:bg-blue-700 transition duration-300 mt-4"
          onClick={handleDonate}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationItem;
