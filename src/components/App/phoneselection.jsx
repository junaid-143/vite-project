import React from "react";

const PhoneCard = ({ name, image, brand }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className=" p-6 rounded-xl  flex flex-col items-center">
        <img src={image} alt={name} className="w-80 h-80 object-contain mb-2" />
        <p className="text-lg font-bold">{name}</p>
        <span className="mt-2 px-3 py-1 border border-black rounded-[6px] text-xs font-semibold">
          {brand}
        </span>
      </div>
    </div>
  );
};

const PhoneSelection = () => {
  return (
    <div className="flex justify-center mt-8 ">
      <PhoneCard
        name="Iphone 12 Pro Max"
        image="/phonemodel/12promax.png"
        brand="APPLE"
      />
    </div>
  );
};

export default PhoneSelection;

