import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400/000000/FFF",
    "https://placehold.co/600x400"
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden h-[250px] flex items-center justify-center">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Carousel Slide"
          className="w-full h-full object-cover rounded-lg absolute"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
}
