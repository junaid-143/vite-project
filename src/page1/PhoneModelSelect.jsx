import Navbar from "../components/App/navbar";

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

function PhoneBrandSelect() {
  return (
    <main>
      <Navbar sticky={false} />

      <div className="flex flex-col items-center p-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Select your brand</h2>

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

          {/* "Can't find what you're looking for?" Section */}
          <div className="mt-6 flex items-center justify-center border border-gray-300 rounded-[6px] p-3 shadow-sm cursor-pointer hover:shadow-md transition">
            <span className="text-blue-600 text-lg font-bold mr-2">?</span>
            <span className="text-black font-semibold">Can't find what you're looking for?</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PhoneBrandSelect;
