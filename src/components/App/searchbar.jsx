import { useState, useEffect, useRef } from "react";

import { Search, ArrowRight } from "lucide-react";

const recentSearches = [
  "Apple iPhone 16 Pro",
  "Apple iPhone 15 Pro",
  "Apple iPhone 14 Pro",
  "Apple iPhone 13 Pro"
];

export default function SearchComponent() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 relative">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Search your products for parts</h2>
      
      {/* Search Bar */}
      <div 
        className={`flex items-center border rounded-full px-4 py-2 transition-all duration-300 ${isFocused ? 'shadow-lg border-blue-400' : 'border-gray-300'}`}
      >
        <Search className="w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search products..." 
          className="flex-1 px-2 py-1 outline-none bg-transparent" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)} 
        />
        <ArrowRight className="w-6 h-6 text-black cursor-pointer" />
      </div>
      
      {/* Recent Searches Dropdown */}
      {isFocused && query && (
        <div ref={dropdownRef} className="absolute w-full bg-white shadow-md rounded-lg mt-2 max-h-48 overflow-y-auto border border-gray-300">
          {recentSearches.filter(item => item.toLowerCase().includes(query.toLowerCase())).length === 0 ? (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          ) : (
            recentSearches.filter(item => item.toLowerCase().includes(query.toLowerCase())).map((item, index) => (
              <div 
                key={index} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setQuery(item); setIsFocused(false); }}
              >
                {item}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
