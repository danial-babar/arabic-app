// components/SearchBox.tsx
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="text-center">
      <h1 className="mb-4 text-1xl xl:text-3xl 2xl:text-4xl text-[#ffff]">(هُدًى لِّلنَّاسِ وَ بَیِّنٰتٍ مِّنَ الْهُدٰى وَ الْفُرْقَانِۚ)</h1>
      <div className="relative">
        <button
          onClick={handleSearch}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#49CAD2] text-white p-2 rounded-full ml-3"
        >
          <FaArrowLeft size={20} />
        </button>
        <input
          type="text"
          value={query}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="..... اکتب ھنا"  
          className={`border border-gray-300 px-10 py-4 md:w-[600px] rounded-md text-[#000] w-full ${
            isFocused ? "md:h-24" : "md:h-12"
          } sm:h-16`}
          style={{ textAlign: "right" }}
        />
      </div>
    </div>
  );
};

export default SearchBox;