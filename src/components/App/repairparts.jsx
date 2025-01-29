import { Smartphone, PlugZap, BatteryFull, Camera, Volume2, MoreHorizontal } from "lucide-react";

const parts = [
  { name: "Display", icon: <Smartphone size={30} className="text-white" /> },
  { name: "Ports", icon: <PlugZap size={30} className="text-white" /> },
  { name: "Battery", icon: <BatteryFull size={30} className="text-white" /> },
  { name: "Camera", icon: <Camera size={30} className="text-white" /> },
  { name: "Speaker", icon: <Volume2 size={30} className="text-white" /> },
  { name: "Others", icon: <MoreHorizontal size={30} className="text-white" /> }
];

const RepairParts = () => {
  return (
    <div className="w-full max-w-md mx-auto text-center mt-8">
      <p className="text-gray-500">Got a broken device? Let us fix it for you!</p>
      <h2 className="text-2xl font-bold mt-2">Click below to get your repair parts</h2>

      {/* Centered Grid of Buttons */}
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {parts.map((part, index) => (
            <button key={index} className="bg-black w-24 h-24 flex flex-col items-center justify-center rounded-full text-white">
              {part.icon}
              <span className="mt-1 text-sm">{part.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepairParts;
