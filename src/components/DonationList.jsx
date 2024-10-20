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
            className="bg-gray-200 p-6 rounded-lg shadow-lg hover:bg-blue-300 transition duration-300 cursor-pointer group"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationList;
