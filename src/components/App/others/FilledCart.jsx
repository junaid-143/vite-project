import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function FilledCart({ cartItems = [], setCartItems }) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal;

  return (
    <main className="w-full flex flex-col items-center pb-28"> 
      <div className="w-full max-w-md p-4">
        {cartItems.map((item) => (
          <div key={item.id} className="pb-4 mb-2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{item.name}</h3>
              <Button variant="ghost" size="sm" onClick={() => setCartItems([])}>
                Remove All
              </Button>
            </div>

            <div className="flex items-center space-x-3 p-2 border rounded-[6px] bg-gray-100">
  {/* Product Image */}
  <img
    src={`/icons/${item.image}`}  // Ensure correct case
    alt={item.name}
    className="w-16 h-16 object-contain"
  />

  {/* Product Details */}
  <div className="flex-1 text-sm">
    <p className="text-gray-700">{item.description}</p>

    {/* Price Details - Matches the Reference Image */}
    <div className="flex items-center space-x-2">
      <span className="text-blue-600 font-semibold">-{item.discount}</span>
      <span className="text-gray-500 line-through">₹{item.mrp}</span>
      <span className="text-black font-bold">₹{item.price}</span>
    </div>
  </div>

  {/* Remove Button */}
  <div className="flex flex-col items-center">
    <button onClick={() => setCartItems(cartItems.filter((i) => i.id !== item.id))}>
      <MdDelete className="w-8 h-8 text-red-500 hover:text-red-700" />
    </button>
  </div>
</div>


          </div>
        ))}
      </div>

      <div className="fixed bottom-0 w-full max-w-md bg-white shadow-lg p-4 rounded-t-[6px]">
        <h3 className="font-semibold text-black mb-2">Price summary</h3>

        <div className="bg-gray-50 p-3 rounded-[6px] border border-gray-200">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-600 text-sm mb-1">
              <span>{item.name.toLowerCase()} {item.description}</span>
              <span className="font-medium">₹{item.price}</span>
            </div>
          ))}

          <hr className="border-dashed my-2" />

          <div className="flex justify-between font-bold text-black">
            <span>Total Price</span>
            <span className="text-blue-600">₹{total.toLocaleString()}</span>
          </div>
        </div>

        <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold p-4 mt-3 rounded-[6px] text-lg">
          Book now
        </Button>
      </div>
    </main>
  );
}
