import React from "react";

const brands = [
  { name: "Vivo", logo: "/logos/vivo.png" },
  { name: "Xiaomi", logo: "/logos/mi.png" },
  { name: "Samsung", logo: "/logos/samsung.png" },
  { name: "Realme", logo: "/logos/realme.png" },
  { name: "Oppo", logo: "/logos/oppo.png" },
  { name: "Apple", logo: "/logos/apple.png" },
  { name: "OnePlus", logo: "/logos/oneplus.png" },
  { name: "Motorola", logo: "/logos/motorola.png" },
  { name: "Google Pixel", logo: "/logos/pixel.png" },
  { name: "iQOO", logo: "/logos/iqoo.png" },
  { name: "Honor", logo: "/logos/honor.png" },
  { name: "Poco", logo: "/logos/poco.png" },
];

const BrandSelection = () => {
    return (
      <div className="flex flex-col items-center p-6">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 text-left">Select your brand</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-[4px] shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
              </div>
            ))}
          </div>
          <p className="text-gray-500 mt-4 text-center">More brands....</p>
        </div>
      </div>
    );
  };
  
  export default BrandSelection;
  
