import '@/styles/globals.css';

const UserDonationList = ({ donations }) => {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="head_text font-bold mb-6"> <span className='blue_gradient'>Your Donations</span></h1>
        {donations.length > 0 ? (
          <ul className="space-y-4">
            {donations.map((donationDetail, index) => (
              <li key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <h2 className="text-lg font-bold mb-2 text-blue-600">
                  {donationDetail.donation.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Beneficiary:</strong> {donationDetail.donation.beneficiary}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Description:</strong> {donationDetail.donation.description}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Amount Donated:</strong> ${donationDetail.userDonation.amount}
                </p>
                {donationDetail.userDonation.notes && (
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Note:</strong> {donationDetail.userDonation.notes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have not made any donations yet.</p>
        )}
      </div>
    );
  };
  
  export default UserDonationList;
  