import { FaChevronRight } from "react-icons/fa";

export default function AddressSelector({ address }) {
    return (
      <div className="p-4 space-y-4 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-md bg-gray-100 p-4 rounded-xl shadow-md cursor-pointer">
          <p className="text-gray-500 text-sm">Shipping Address</p>
          <div className="flex justify-between items-center">
            {address ? (
              <div>
                <p className="text-lg font-medium">{address.name}</p>
                <p className="text-sm text-gray-600">{address.details}</p>
                <p className="text-sm text-gray-600">{address.phone}</p>
              </div>
            ) : (
              <p className="text-lg font-medium">Add Shipping Address</p>
            )}
            <span className="">
                <FaChevronRight />
                </span>
          </div>
        </div>
  
        <div className="w-full max-w-md bg-gray-100 p-4 rounded-xl shadow-md">
          <p className="text-gray-500 text-sm">Pickup date</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Enter Pickup Date</p>
            <span className="">
            <FaChevronRight />
            </span>
          </div>
        </div>
  
        <div className="w-full max-w-md bg-gray-100 p-4 rounded-xl shadow-md">
          <p className="text-gray-500 text-sm">Payment Method</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Enter Payment Method</p>
            <span className="">
            <FaChevronRight />
            </span>
          </div>
        </div>
      </div>
    );
  }