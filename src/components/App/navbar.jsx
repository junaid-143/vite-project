import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ sticky = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${sticky ? "fixed" : "relative"} top-0 left-0 w-full bg-white shadow-md z-50`}>
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Fixamigo</div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
          <Menu className="w-6 h-6 cursor-pointer md:hidden" onClick={() => setMenuOpen(true)} />
        </div>
      </nav>

      {/* Full-screen Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="text-white text-3xl font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              Menu Content
            </motion.div>
            <X 
              className="absolute top-5 right-5 w-8 h-8 text-white cursor-pointer" 
              onClick={() => setMenuOpen(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
