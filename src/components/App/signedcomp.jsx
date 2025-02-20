import React from "react";
import { Button } from "@/components/ui/button";
import { BsCart2 } from "react-icons/bs";

const SignedComp = ({ Icon = BsCart2, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <Icon className="text-6xl text-black-300" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm px-6">{description}</p>
      <div className="space-y-2 w-full max-w-xs">
        <Button variant="outline" className="w-full rounded-[6px] bg-color-black hover:bg-gray-100">
          Continue shopping
        </Button>
      </div>
    </div>
  );
};

export default SignedComp;
