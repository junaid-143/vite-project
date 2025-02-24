import { useState } from "react";

const RepairForm = () => {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [pincode, setPincode] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const issues = [
    "Dead phone",
    "IC issues",
    "Camera issues",
    "Motherboard issues",
    "Volume key FPC",
    "Power key FPC",
  ];

  return (
    <div className="p-8 bg-white rounded-[6px] max-w-md mx-auto mt-14">
      {/* Heading */}
      <h2 className="text-xl font-semibold px-4 text-center mb-2">
        Looking for other repair services?
      </h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Share your issue, and our team will reach out with the best solution.
      </p>

      {/* Issue Selection */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {issues.map((issue) => (
          <button
            key={issue}
            onClick={() => setSelectedIssue(issue)}
            className={`bg-gray-100 py-3 px-5 rounded-[4px] text-sm border ${
              selectedIssue === issue
                ? "border border-blue-500 text-blue-500"
                : "border-transparent text-gray-700"
            }`}
          >
            {issue}
          </button>
        ))}
      </div>

      {/* Pincode Input */}
      <label className="text-sm font-medium text-gray-900 block mb-2">
        Enter your pincode
      </label>
      <input
        type="text"
        placeholder="Pincode*"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className="w-full bg-gray-100 rounded-[4px] p-3 mb-6 outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Issue Description */}
      <label className="text-sm font-medium text-gray-900 block mb-2">
        Describe your issue
      </label>
      <textarea
        placeholder="Write here..."
        value={issueDescription}
        onChange={(e) => setIssueDescription(e.target.value)}
        className="w-full bg-gray-100 rounded-[4px] p-3 h-24 outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      {/* Submit Button */}
      <button className="w-full mt-6 bg-black text-white py-4 rounded-[4px] font-semibold hover:bg-gray-700">
        Submit
      </button>
    </div>
  );
};

export default RepairForm;
