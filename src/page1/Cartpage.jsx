import React from "react";
import Navbar from "../components/App/navbar";
import SignedComp from "../components/App/signedcomp";
import NotSignedComp from "../components/App/notsignedcomp";
import { BsCart2 } from "react-icons/bs";
import BackButton from "../components/App/backbutton";
import FilledCart from "../components/App/others/FilledCart"; // Importing the FilledCart component

// Dummy cart items array (replace with actual cart state later)
const cartItems = [
  {
    id: 1,
    name: "Apple iPhone 15 Plus",
    description: "iPhone 15 Plus display qty2",
    price: 8000,
    size: "M",
    color: "Lemon",
  },
];

const CartPage = ({ isLoggedIn }) => {
  const hasItems = cartItems.length > 0; // Check if the cart has items

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar sticky={false} />
      <BackButton title="Cart" />

      <div className={`flex flex-col flex-grow items-center ${hasItems ? "" : "justify-center"}`}>
      {!isLoggedIn ? (
          <NotSignedComp
            Icon={BsCart2}
            title="Your Cart is Empty"
            description="Sign in to view your saved items or start adding new favorites."
          />
        ) : hasItems ? (
          // ✅ Pass cartItems as a prop
          <FilledCart cartItems={cartItems} setCartItems={() => {}} />
        ) : (
          <SignedComp
            Icon={BsCart2}
            title="Your Cart is Empty"
            description="Start adding items to your cart now!"
          />
        )}
      </div>
    </main>
  );
};

export default CartPage;


