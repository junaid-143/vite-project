import { useState, useRef } from "react";

const TabSelector = () => {
  const tabs = ["Iphone 16 Plus", "Iphone 16", "Iphone 16 Pro", "Iphone 16 Mini"];
  const [activeTab, setActiveTab] = useState("Iphone 16 Plus");
  const tabRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      {/* Scrollable Tabs */}
      <div
        ref={tabRef}
        className="flex space-x-2 bg-gray-100 p-5 rounded-lg overflow-x-auto no-scrollbar w-full max-w-sm snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-[6px] font-medium transition-all duration-300 snap-center ${
              activeTab === tab
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-500 border border-gray-300"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Selected Tab Content */}
      <h2 className="text-xl font-bold mt-4">{activeTab}</h2>

      {/* Short Heading with Square */}
      <div className="mt-2 px-3 py-1 border border-black rounded-[6px] text-xs font-semibold">
        APPLE
      </div>
    </div>
  );
};

export default TabSelector;
