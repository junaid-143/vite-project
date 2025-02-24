import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {  ArrowRight } from "lucide-react";

const spareParts = [
  { id: 1, name: "Display qlty1", type: "display", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 2, name: "Charging port qlty2", type: "chargingport", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 3, name: "Receiver qlty3", type: "receiver", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 4, name: "Battery qlty1", type: "battery", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 5, name: "Power button qlty2", type: "powerbutton", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 6, name: "Battery qlty3", type: "battery", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 7, name: "Front camera qlty3", type: "front-camera", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 8, name: "Back camera qlty3", type: "back-camera", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 9, name: "Speaker qlty3", type: "speaker", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 10, name: "Mic qlty3", type: "mic", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: false },
  { id: 11, name: "Motherboard qlty3", type: "motherboard", oldPrice: 11000, newPrice: 8000, discount: "-18%", estimatedPrice: true }
];

const getImage = (type) => `/icons/${type}.png`;

const SparePartsRemoveList = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-2">SPARE PARTS</h2>
      <hr className="bg-black mb-4" />
      {spareParts.map((item) => (
        <div key={item.id} className="bg-gray-100 py-4 pr-2 rounded-[6px] shadow-sm mb-3">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center">
              <img src={getImage(item.type)} alt={item.name} className="w-12 h-12 mr-3" />
              <div>
                <p className="font-medium text-black">{item.name}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-blue-600 font-semibold">{item.discount}</span>
                  <span className="line-through text-gray-500">₹{item.oldPrice}</span>
                  <span className="text-black font-bold">₹{item.newPrice}</span>
                </div>
              </div>
            </div>
            <div className=" text-red-500  text-2xl">
            <MdDelete />
            </div>
          </div>
          {item.estimatedPrice && (
            <p className="flex items-center text-[11px] text-gray-600 bg-gray-200 px-1  rounded-[4px] mt-2 ml-1 w-full">
              <AiOutlineCheckCircle className="text-blue-600 mr-2" />
             This is an estimated price; the final price will be determined after inspection.
            </p>
          )}
        </div>
      ))}
      <div className="flex items-center bg-gray-100 py-4 pr-2 rounded-[6px] shadow-sm mb-3 p-4">
        <img src="/icons/service.png" alt="Repair Service" className="w-12 h-12 mr-3" />
        <p className="font-medium text-black flex-grow">Can’t find your repair service?</p>
        <div className="bg-black text-white p-2 rounded-full">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default SparePartsRemoveList;
