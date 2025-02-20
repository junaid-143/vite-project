import { useState } from "react";
import BackButton from "../components/App/backbutton";
import Navbar from "../components/App/navbar";
import { BsThreeDotsVertical } from "react-icons/bs";

const addresses = [
  {
    id: 1,
    name: "Jane Doe",
    address: "3 Newbridge Court",
    city: "Chino Hills, CA 91709, United States",
    isSelected: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    address: "3 Newbridge Court",
    city: "Chino Hills, CA 91709, United States",
    isSelected: false,
  },
];

const RemoveAddress = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar sticky={false} />
      <BackButton title="Address" />

      {/* Address Cards */}
      <div className="flex flex-col items-center px-4 py-6 space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`w-full max-w-md p-4 rounded-[6px] border ${
              addr.isSelected ? "bg-gray-100" : "border-gray-300 bg-gray-100"
            } relative`} // Ensure relative positioning for dropdown
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800">{addr.name}</p>
                <p className="text-gray-600">{addr.address}</p>
                <p className="text-gray-600">{addr.city}</p>
              </div>
              
              {/* Three Dots Button */}
              <div
                onClick={() => toggleMenu(addr.id)}
                className="text-gray-600 text-sm font-medium hover:underline"
              >
                <BsThreeDotsVertical />
              </div>

              {/* Dropdown Menu */}
              {menuOpen === addr.id && (
                <div className="absolute right-0 mt-2 w-24 bg-white border rounded-[4px] shadow-lg">
                  <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    Edit
                  </button>
                  <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100">
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Address Button */}
      <div className="flex justify-center mt-auto mb-8 px-4">
        <button className="w-full max-w-md px-4 py-2 border border-black rounded-[6px] text-black font-medium hover:bg-gray-100">
          Add address
        </button>
      </div>
    </main>
  );
};

export default RemoveAddress;
