import React from "react";
import { FaCheck } from "react-icons/fa";

const steps = [
  "Schedule for pick-up",
  "Picked up by courier",
  "Departed to Service center",
  "Repairing",
  "Out for Delivery",
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex flex-col items-start w-full max-w-sm mx-auto p-4">
      {/* Estimated Delivery */}
      <p className="text-gray-600 text-sm mb-2">Estimated Date of Delivery: <strong>Sep 30, 2021</strong></p>
      
      {/* Timeline */}
      <div className="relative pl-4">
        {steps.map((step, index) => (
          <div key={index} className="relative mb-4 last:mb-0 flex items-center">
            {/* Vertical Line */}
            {index !== steps.length - 1 && (
              <div className="absolute left-[11px] top-6 w-[2px] h-full bg-gray-600"></div>
            )}
            
            {/* Step Indicator */}
            <div
              className={`relative w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                index < currentStep ? "bg-gray-600 text-white border-gray-600" : "bg-gray-300 border-gray-600"
              }`}
            >
              {index < currentStep ? <FaCheck size={12} /> : ""}
            </div>
            
            {/* Step Content with Padding */}
            <div className="pl-4">
              <p
                className={`text-sm font-semibold ${
                  index === currentStep ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {step}
              </p>
              <p className="text-xs text-gray-500">September {26 + index}, 2021 • {index % 2 === 0 ? "20:12" : "10:57"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
