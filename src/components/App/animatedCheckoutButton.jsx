import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AnimatedCheckoutButton = ({ totalPrice, scrollToCouponSection }) => {
    return (
        <AnimatePresence>
            {totalPrice > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 w-full bg-white py-3 px-4 border-t shadow-md flex justify-between items-center"
                >
                    <div>
                        <p className="text-gray-600 text-xs">
                            By clicking <span className="font-semibold">Book now</span>, you agree with our{" "}
                            <a href="/terms-and-conditions" className="text-blue-600 underline">
                                Terms and Conditions
                            </a>
                        </p>
                        <p className="text-black font-bold text-xl">₹{totalPrice}</p>
                        <button
                            onClick={scrollToCouponSection}
                            className="text-blue-600 text-sm"
                        >
                            Apply Coupon &gt;
                        </button>
                    </div>

                    <button className="flex items-center gap-2 bg-black text-white py-3 px-5 rounded-[6px] font-semibold">
                        Book Now <ArrowRight size={18} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedCheckoutButton;
