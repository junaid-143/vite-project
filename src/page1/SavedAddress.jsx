import BackButton from "../components/App/backbutton";
import Navbar from "../components/App/navbar";

const addresses = [
  {
    id: 1,
    name: "Jane Doe",
    address: "3 Newbridge Court",
    city: "Chino Hills, CA 91709, United States",
    isSelected: true, // Highlight the selected card
  },
  {
    id: 2,
    name: "Jane Doe",
    address: "3 Newbridge Court",
    city: "Chino Hills, CA 91709, United States",
    isSelected: false,
  },
];

const SavedAddress = () => {
  return (
    <main className="w-screen h-screen flex flex-col ">
      <Navbar sticky={false} />
      <BackButton title="Address" />

      {/* Address Cards */}
      <div className="flex flex-col items-center px-4 py-6 space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`w-full max-w-md p-4 rounded-[6px] border ${
              addr.isSelected ? " bg-gray-100" : "border-gray-300 bg-gray-100"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800">{addr.name}</p>
                <p className="text-gray-600">{addr.address}</p>
                <p className="text-gray-600">{addr.city}</p>
              </div>
              <button className="text-red-500 text-sm font-medium hover:underline">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Address Button */}
      <div className="flex justify-center mt-auto mb-8 px-4 ">
        <button className="w-full max-w-md px-4 py-2 border border-black rounded-[6px] text-black font-medium hover:bg-gray-100">
          Add address
        </button>
      </div>
    </main>
  );
};

export default SavedAddress;
