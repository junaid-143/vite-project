import React from 'react';
import Navbar from '../../components/App/navbar';
import SignedComp from '../../components/App/signedcomp';
import { BsCart2 } from "react-icons/bs";
import BackButton from '../../components/App/backbutton';

const SignedEmptyCart = () => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Cart" />
            
            
            <div className="flex flex-col flex-grow items-center justify-center px-4">
                <SignedComp
                    Icon={BsCart2} 
                    title="Your Cart is Empty"
                    description="Sign in to view your saved items or start adding new favorites."
                />
            </div>
        </main>
    );
};

export default SignedEmptyCart;
