import "@/styles/globals.css";
import Image from "next/image";

const DonationList = ({ data, handleView }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="head_text text-center mb-6">
        <span className="blue_gradient">Donate & Save Lives</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((donation) => (
          <div
            key={donation._id}
            className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-blue-500 border-2 border-blue-500 transition duration-300 cursor-pointer group"
            onClick={() => handleView && handleView(donation)}
          >
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/icons/globe.png"
                alt="logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                {donation.title}
              </h3>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Beneficiary: {donation.beneficiary}
              </p>
              <p className="text-sm text-gray-600">
                Rp {donation.raisedAmount.toLocaleString()} / Rp{" "}
                {donation.goalAmount.toLocaleString()}
              </p>
              <div className="relative w-full h-4 bg-gray-300 rounded-full mt-2 overflow-hidden">
                {" "}
                <div
                  className="absolute top-0 left-0 h-full blue_orange_div rounded-full"
                  style={{
                    width: `${
                      (donation.raisedAmount / donation.goalAmount) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationList;
