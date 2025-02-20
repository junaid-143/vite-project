import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const confettiVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    y: [0, 10, -20, 0],
    scale: [0.5, 1.2, 1],
    transition: { delay: i * 0.1, duration: 1.5, repeat: Infinity },
  }),
};

const OrderPlaced = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Celebration Pop Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-red-500 rounded-full"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={confettiVariants}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: ["#FF5733", "#FFC300", "#28B463", "#3498DB", "#8E44AD"][
                  Math.floor(Math.random() * 5)
                ],
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-t-3xl w-full max-w-md text-center p-6 fixed bottom-0"
      >
        {/* Animated Tick Inside Round Effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.8, ease: "easeInOut" }}
          className="h-28 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 360] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-16 h-16 bg-green-500 border-4 border-white rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg"
          >
            ✔️
          </motion.div>
        </motion.div>

        <h2 className="text-2xl font-bold text-black">Order Placed Successfully</h2>
        <p className="text-gray-500 mt-2">You will receive an email confirmation</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3 mt-6 rounded-[8px] text-lg">
            See order details
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OrderPlaced;
