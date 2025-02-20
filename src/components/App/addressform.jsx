import { useState } from "react";

const AddressForm = ({ buttonLabel = "Add address" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    state: "",
    city: "",
    houseName: "",
    roadName: "",
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field].trim()) {
      setFocused({ ...focused, [field]: false });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    if (!formData.houseName.trim()) newErrors.houseName = "House Name is required";
    if (!formData.roadName.trim()) newErrors.roadName = "Road Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Address added successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 space-y-6">
      {/* Input Fields */}
      {[
        { name: "fullName", label: "Full name", required: true },
        { name: "phoneNumber", label: "Phone number", required: true },
        { name: "pincode", label: "Pincode", required: true },
        { name: "city", label: "City", required: false },
        { name: "state", label: "State", required: false },
        { name: "houseName", label: "House No, Building Name", required: true },
        { name: "roadName", label: "Road name, Area, Colony", required: true },
      ].map((field) => (
        <div key={field.name} className="relative">
          <label
            className={`absolute left-3 top-3 text-gray-400 transition-all ${
              focused[field.name] || formData[field.name]
                ? "text-xs top-1"
                : "text-base top-3"
            }`}
          >
            {field.label + (field.required ? " *" : "")}
          </label>
          <input
            type="text"
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            onFocus={() => handleFocus(field.name)}
            onBlur={() => handleBlur(field.name)}
            className="w-full px-4 pt-5 pb-2  rounded-[6px] bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-black text-white font-semibold rounded-[6px] hover:opacity-90"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default AddressForm;
