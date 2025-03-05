import { ArrowRight } from "lucide-react";
import { useState, forwardRef } from "react";
import { CiDiscount1 } from "react-icons/ci";

const PriceSummary = forwardRef(({ cartItems = [], couponInputRef }, ref) => {
  const [coupon, setCoupon] = useState("");

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div ref={ref} className="p-6 bg-white rounded-[6px] max-w-md mx-auto">
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-[6px]">
        <CiDiscount1 size={26} className="mr-2 text-black" />
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          ref={couponInputRef}
          className="bg-transparent outline-none w-full text-gray-700"
        />
        <div className="bg-black text-white p-2 rounded-full">
          <ArrowRight size={18} />
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-3">Price Summary</h2>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between text-gray-600 mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span className="text-gray-900">₹{item.price * item.quantity}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No items in the cart</p>
      )}

      <hr className="my-2 border-gray-300" />
      <div className="flex justify-between font-semibold">
        <span>Total Price</span>
        <span className="text-blue-600">₹{cartTotal}</span>
      </div>
    </div>
  );
});

export default PriceSummary;
