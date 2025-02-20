import { motion } from "framer-motion";
import { GiAutoRepair } from "react-icons/gi";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 ,ease: "easeOut"}}
        className="max-w-lg"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5,ease: "easeOut" }}
        >
          Fixamigo
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 , ease: "easeOut"}}
        >
          Mobile & Laptop Repair with Door-to-Door Pickup & Delivery
        </motion.p>
        
        {/* Repair Tools Animation */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 ,ease: "easeOut" }}
        >
         
         
        </motion.div>
        
        <motion.p
          className="mt-4 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 , ease: "easeOut"}}
        >
          We're fixing and tuning up for launch. Stay tuned!
        </motion.p>
      </motion.div>
    </div>
  );
}