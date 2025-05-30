import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/App/navbar";
import PhoneSelection from "../components/App/phoneselection";
import SparePartsList from "../components/App/sparepartslist";
import WhyChooseUs from "../components/App/whychooseus";
import PriceSummary from "../components/App/pricesummary";

function SparePartsPage() {
    const [cart, setCart] = useState({});
    const couponSectionRef = useRef(null);
    const couponInputRef = useRef(null);

    const toggleCart = (id, name, price) => {
        setCart((prevCart) => {
            let updatedCart = { ...prevCart };

            if (updatedCart[id]) {
                delete updatedCart[id];
            } else {
                updatedCart[id] = { id, name, price, quantity: 1 };
            }

            return updatedCart;
        });
    };

    const totalPrice = Object.values(cart).reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const hasItemsInCart = Object.keys(cart).length > 0;

    const scrollToCouponSection = () => {
        if (couponSectionRef.current) {
            couponSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
            if (couponInputRef.current) {
                couponInputRef.current.focus();
            } 
        }, 500);
    };

    return (
        <main className="relative min-h-screen">
            <Navbar sticky={true} />
            <PhoneSelection />
            <SparePartsList cart={cart} toggleCart={toggleCart} />
            {hasItemsInCart && <PriceSummary cartItems={Object.values(cart)} ref={couponSectionRef} couponInputRef={couponInputRef} />}
            <WhyChooseUs />

            <AnimatePresence>
                {hasItemsInCart && (
                    <div className="fixed bottom-0 left-0 w-full flex justify-center ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-full max-w-[500px] bg-white py-3 px-4 border shadow-md flex justify-between items-center rounded-t-[12px]"
                        >
                            <div>
                                <p className="text-gray-600 text-xs">
                                    By clicking <span className="font-semibold">Book now</span>, you agree with our{" "}
                                    <a href="/terms-and-conditions" className="text-blue-600 underline">
                                        Terms and Conditions
                                    </a>
                                </p>
                                <p className="text-black font-bold text-xl">₹{totalPrice}</p>
                                <button onClick={scrollToCouponSection} className="text-blue-600 text-sm">
                                    Apply Coupon &gt;
                                </button>
                            </div>

                            <button className="flex items-center gap-2 bg-black text-white py-3 px-5 rounded-[6px] font-semibold">
                                Book Now <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}

export default SparePartsPage;
