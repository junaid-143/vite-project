import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import Navbar from "../navbar";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function FilledCart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // Calculate total price dynamically
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shippingCost = 40;
  const total = subtotal + shippingCost;

  // Function to remove all items
  const handleRemoveAll = () => {
    setCartItems([]);
  };

  // Function to remove a single item
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <main>
      <Navbar />

      <div className="max-w-lg  ">
       

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="border-b pb-4 mb-4">
            {/* Title and Remove Button */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{item.name}</h3>
              <Button variant="ghost" size="sm" onClick={handleRemoveAll}>
                Remove All
              </Button>
            </div>

            {/* Item Details */}
            <div className="flex items-center space-x-4 p-2 border rounded-[8px] bg-gray-100 border-none">
              <Smartphone className="w-12 h-12 text-gray-500" />

              <div className="flex-1 text-sm">
                <p className="text-gray-700">{item.description}</p>
                {item.size && item.color && (
                  <p className="text-gray-500">
                    Size - <span className="font-semibold">{item.size}</span>{" "}
                    Color - <span className="font-semibold">{item.color}</span>
                  </p>
                )}
                {item.brand && item.model && (
                  <p className="text-gray-500">
                    Brand - <span className="font-semibold">{item.brand}</span>{" "}
                    Model - <span className="font-semibold">{item.model}</span>
                  </p>
                )}
              </div>

              {/* Price and Quantity */}
              <div className="flex flex-col items-center">
                <p className="font-semibold">₹{item.price}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button onClick={() => handleRemoveItem(item.id)}>
                    <MdDelete className="w-9 h-9 text-red-500 hover:text-red-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Checkout Summary Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-6">
          <div className="flex justify-between text-gray-700 text-lg font-medium">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-gray-500 mt-2">
            <span>Shipping Cost</span>
            <span>₹{shippingCost.toLocaleString()}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-black font-bold text-lg">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 mt-4 rounded-[8px] text-lg">
            Checkout
          </Button>
        </div>
      </div>
    </main>
  );
}
