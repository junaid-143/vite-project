import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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

const SparePartsList = ({ cart, toggleCart }) => {
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
            <button
              onClick={() => toggleCart(item.id, item.name, item.newPrice)}
              className={`px-3 py-2 text-sm rounded-[4px] transition duration-300 ${
                cart[item.id] ? "bg-red-600 text-white" : "bg-black text-white"
              }`}
            >
              {cart[item.id] ? <MdDeleteForever /> : <FaCartPlus />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default SparePartsList;
