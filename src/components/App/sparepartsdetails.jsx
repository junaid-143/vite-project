import React from "react";
import { FaBatteryFull, FaCamera, FaMicrophone, FaMobileAlt, FaPowerOff, FaVolumeUp } from "react-icons/fa";
import { MdOutlineChargingStation } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { LuSpeaker } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";

const spareParts = [
  { id: 1, name: "Display qlty1", type: "display", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 2, name: "Charging port qlty2", type: "charging", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 3, name: "Receiver qlty3", type: "receiver", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 4, name: "Battery qlty1", type: "battery", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 5, name: "Power button qlty2", type: "power", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 6, name: "Battery qlty3", type: "battery", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 7, name: "Front camera qlty3", type: "front-camera", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 8, name: "Back camera qlty3", type: "back-camera", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 9, name: "Speaker qlty3", type: "speaker", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
  { id: 10, name: "Mic qlty3", type: "mic", oldPrice: 11000, newPrice: 8000, discount: "-18%" },
];

const getIcon = (type) => {
  switch (type) {
    case "display":
      return <FiSmartphone className="text-5xl" />;
    case "charging":
      return <MdOutlineChargingStation className="text-5xl" />;
    case "receiver":
      return <FaMobileAlt className="text-5xl" />;
    case "battery":
      return <FaBatteryFull className="text-5xl" />;
    case "power":
      return <FaPowerOff className="text-5xl" />;
    case "front-camera":
      return <BsCameraVideo className="text-5xl" />;
    case "back-camera":
      return <FaCamera className="text-5xl" />;
    case "speaker":
      return <LuSpeaker className="text-5xl" />;
    case "mic":
      return <FaMicrophone className="text-5xl" />;
    default:
      return <FiSmartphone className="text-5xl" />;
  }
};

const SparePartsList = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-2">SPARE PARTS</h2>
      <hr className="bg-black mb-4" />
      {spareParts.map((item) => (
        <div key={item.id} className="flex items-center justify-between bg-gray-100 py-4 pr-2 rounded-[6px] shadow-sm mb-3">
          <div className="flex items-center ">
            <div>{getIcon(item.type)}</div>
            <div>
              <p className="font-medium text-black">{item.name}</p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-blue-600 font-semibold">{item.discount}</span>
                <span className="line-through text-gray-500">₹{item.oldPrice}</span>
                <span className="text-black font-bold">₹{item.newPrice}</span>
              </div>
            </div>
          </div>
          <div className="bg-black text-white px-3 py-2 text-sm rounded-[4px]">
          <FaCartPlus />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SparePartsList;
