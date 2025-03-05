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
    description: "display qty2",
    image: "display.png",
    discount: "18%",
    mrp: 10000,
    price: 8000,

  },
];

const CartPage = ({ isLoggedIn }) => {
  const hasItems = cartItems.length > 0; // Check if the cart has items

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar sticky={false} />
      <BackButton title="Cart" />

      {/* This wrapper ensures full height but does NOT center FilledCart */}
      <div className={`flex-1 w-full ${hasItems ? "flex flex-col" : "flex justify-center items-center"}`}>
        {!isLoggedIn ? (
          <div className="flex flex-col justify-center items-center h-full w-full">
            <NotSignedComp
              Icon={BsCart2}
              title="Your Cart is Empty"
              description="Sign in to view your saved items or start adding new favorites."
            />
          </div>
        ) : hasItems ? (
          // ✅ FilledCart will NOT be centered, it will start from the top
          <FilledCart cartItems={cartItems} setCartItems={() => {}} />
        ) : (
          <div className="flex flex-col justify-center items-center h-full w-full">
            <SignedComp
              Icon={BsCart2}
              title="Your Cart is Empty"
              description="Start adding items to your cart now!"
            />
          </div>
        )}
      </div>
    </main>
  );
};


export default CartPage;


