import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

import Navbar from "../../components/App/navbar";

import {
  FaCircleChevronLeft,
  FaArrowRight,
  FaTag,
  FaCheck,
} from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

import Confetti from "react-confetti";

import { TiTick } from "react-icons/ti";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Custom Hook to Get Window Size

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

const cartItems = [{ id: 1, name: "Apple iPhone 15 Plus", price: 16000 }];

const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

const shippingCost = 40;

const total = subtotal + shippingCost;

export default function CheckOut() {
  const [isOrderPlaced, setOrderPlaced] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);

  const [isShippingModalOpen, setShippingModalOpen] = useState(false);

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const { width, height } = useWindowSize();

  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 4000); // Confetti lasts longer
  };

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div>

      <div className="p-4 lg:p-2 bg-gray-100 mt-16  max-w-3xl lg:max-w-2xl mx-auto w-full">
        <div className="flex items-center">
          <FaCircleChevronLeft className="text-black w-6 h-6 cursor-pointer" />

          <h1 className="text-xl font-bold flex-1 text-center text-gray-900">
            Checkout
          </h1>
        </div>
      </div>
      <div className="p-4 lg:p-2 flex flex-col flex-grow max-w-3xl lg:max-w-2xl  mx-auto w-full overflow-y-auto">
        <div className="space-y-3">
          <div
            className="bg-gray-200 p-6 lg:p-4 rounded-[12px] lg:max-w-2xl shadow-sm flex justify-between items-center"
            onClick={() => setShippingModalOpen(true)}
            >
            <div>
              <span className="text-gray-600 text-base block">
                Shipping Address
              </span>

              <span className="text-black font-medium text-lg">
                Add Shipping Address
              </span>
            </div>

            <FaArrowRight className="text-gray-500" />
          </div>

          <div
            className="bg-gray-200 p-6 lg:p-4 rounded-[12px] shadow-sm flex justify-between items-center"
            onClick={() => setPaymentModalOpen(true)}
          >
            <div>
              <span className="text-gray-600 text-base block">
                Payment Method
              </span>

              <span className="text-black font-medium text-lg">
                Add Payment Method
              </span>
            </div>

            <FaArrowRight className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 max-w-3xl lg:max-w-2xl lg:p-8 rounded-2xl mx-auto w-full border-t border-gray-200">
        <div className="bg-gray-200 p-6 lg:p-4 rounded-[12px] shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaTag className="text-gray-600 text-xl" />

            <input
              type="text"
               
              placeholder="Enter Coupon Code"
              className="bg-transparent outline-none text-gray-700 text-lg max-w-40"
            />
          </div>

          <FaArrowRight className="text-white bg-black rounded-full p-1 w-6 h-6" />
        </div>

        <div className="bg-gray-50 p-6 lg:p-4 rounded-[12px] shadow-md mt-4 lg:mt-2">
          <div className="flex justify-between text-gray-700 text-xl font-medium">
            <span>Subtotal</span>

            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-gray-500 mt-3 lg:mt-1 text-lg">
            <span>Shipping Cost</span>

            <span>₹{shippingCost.toLocaleString()}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-black font-bold text-xl">
            <span>Total</span>

            <span>₹{total.toLocaleString()}</span>
          </div>

          <Button
            onClick={handlePlaceOrder}
            className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-4 mt-5 lg:mt-3 rounded-[12px] text-xl"
            >
            Place Order
          </Button>
        </div>
      </div>
      {/* Shipping Address Modal */}
      <Dialog open={isShippingModalOpen} onOpenChange={setShippingModalOpen}>
        <DialogContent className="max-w-lg mx-auto">
          <DialogTitle className="text-2xl">Add Shipping Address</DialogTitle>

          <p className="text-gray-500 mb-5 text-lg">
            Enter your shipping address details here.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 border rounded-[8px] text-lg"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 mb-4 border rounded-[8px] text-lg"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full p-3 mb-4 border rounded-[8px] text-lg"
            />

          <input
            type="text"
            placeholder="Postal Code"
            className="w-full p-3 mb-4 border rounded-[8px] text-lg"
          />

          <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 rounded-[8px] text-lg">
            Save Address
          </Button>
        </DialogContent>
      </Dialog>
      
      {/* Payment Method Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setPaymentModalOpen}>
        <DialogContent className="max-w-lg mx-auto">
          <DialogTitle className="text-2xl">Select Payment Method</DialogTitle>

          <p className="text-gray-500 mb-5 text-lg">
            Choose your preferred payment method.
          </p>

          <div className="space-y-4">
            {["cod", "card", "upi"].map((method) => (
              <div
              key={method}
                className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center text-lg ${
                  selectedPayment === method
                  ? "border-black bg-gray-200"
                  : "border-gray-300"
                }`}
                onClick={() => setSelectedPayment(method)}
                >
                <span className="font-medium">{method.toUpperCase()}</span>

                {selectedPayment === method && (
                  <FaCheck className="text-green-600" />
                )}
              </div>
            ))}
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 mt-5  rounded-lg text-lg">
            Confirm Payment Method
          </Button>
        </DialogContent>
      </Dialog>
      {/* Confetti Effect - Always Above Popup */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
            >
            <Confetti
              width={width}
              height={height}
              numberOfPieces={300}
              gravity={0.2}
              tweenDuration={4000}
              recycle={false}
              />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Order Success Modal - Stays Below Confetti */}
      <AnimatePresence>
        {isOrderPlaced && (
          <motion.div
          initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-40"
            >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-t-3xl w-full max-w-md text-center p-6 "
              >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.7 }}
                className="w-16 h-16 bg-green-500 border-4 border-white rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mx-auto"
              >
                <TiTick />
              </motion.div>
              <h2 className="text-2xl font-bold text-black mt-4 ">
                Order Placed Successfully
              </h2>
              <p className="text-gray-500 mt-2">
                You will receive an email confirmation.
              </p>
              Merge change Merge change
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                >
                <Button
                  onClick={() => setOrderPlaced(false)}
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 mt-6 rounded-[8px] text-lg"
                  >
                  See Order Details
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
    </main>
  );
}
