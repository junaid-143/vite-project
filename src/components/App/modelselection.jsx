import React from "react";

const iphoneModels = [
  { name: "Apple iPhone 12 Pro Max", image: "/phonemodel/12promax.png" },
  { name: "Apple iPhone 12 Pro", image: "/phonemodel/12promax.png" },
  { name: "Apple iPhone 11 Pro", image: "/phonemodel/12promax.png" },
  { name: "Apple iPhone 11 Pro Max", image: "/phonemodel/12promax.png" },
  { name: "Apple iPhone 11", image: "/phonemodel/12promax.png" },
  { name: "Apple iPhone SE 2nd Gen", image: "/phonemodel/12promax.png" },
  
];

const ModelSelection = () => {
  return (
    <div className="w-full p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-center">Select your model from</h2>
        <h2 className="text-xl font-semibold text-center mb-4">Apple</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {iphoneModels.map((model, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col items-center cursor-pointer
                        transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <img src={model.image} alt={model.name} className="w-32 h-32 object-contain mb-2" />
              <p className="text-center text-sm font-medium">{model.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelSelection;
