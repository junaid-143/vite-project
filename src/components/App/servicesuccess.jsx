import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button"; // Adjust import based on your setup

function ServiceSuccess() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [isOrderPlaced, setOrderPlaced] = useState(true);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
          >
            <Confetti
              width={size.width}
              height={size.height}
              numberOfPieces={300}
              gravity={0.2}
              tweenDuration={4000}
              recycle={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Success Modal */}
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
              className="bg-white rounded-t-3xl w-full max-w-md text-center p-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.7 }}
                className="w-16 h-16 bg-green-500 border-4 border-white rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mx-auto"
              >
                <TiTick />
              </motion.div>
              <h2 className="text-2xl font-bold text-black mt-4">
                Service Placed Successfully
              </h2>
              <p className="text-gray-500 mt-2">
                You will receive an email confirmation.
              </p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Button
                  onClick={() => setOrderPlaced(false)}
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 mt-6 rounded-[8px] text-lg"
                >
                  See Service Details
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServiceSuccess;
