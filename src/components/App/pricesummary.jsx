import { Tag, ArrowRight } from "lucide-react";
import { useState } from "react";

const PriceSummary = () => {
  const [coupon, setCoupon] = useState("");

  return (
    <div className="p-6 bg-white rounded-[6px] max-w-md mx-auto">
      {/* Coupon Code Section */}
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-[6px]">
        <div className="flex items-center text-gray-600 w-full">
          <Tag size={20} className="mr-2" />
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>
        <div className="bg-black text-white p-2 rounded-full">
          <ArrowRight size={18} />
        </div>
      </div>

      {/* Price Summary */}
      <h2 className="text-lg font-semibold mt-6 mb-3 text-gray-900">
        Price summary
      </h2>

      <div className="bg-white border rounded-[6px] p-4">
        {/* Product Price */}
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Iphone 12 pro max</span>
          <span className="font-medium">₹8000</span>
        </div>

        {/* Divider */}
        <hr className="border-dashed border-gray-300 mb-2" />

        {/* Total Price */}
        <div className="flex justify-between font-semibold">
          <span>Total Price</span>
          <span className="text-blue-600">₹8000</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
