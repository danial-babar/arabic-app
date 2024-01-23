// components/SearchBox.tsx
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

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
      <div className="relative">
        <button
          onClick={handleSearch}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
        >
          <AiOutlineSearch size={20} />
        </button>
        <input
          type="text"
          value={query}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your question in Arabic"
          className={`border border-gray-300 px-4 py-2 rounded-md text-[#000] w-full ${
            isFocused ? "h-12" : "h-8"
          } sm:h-16`}
          style={{ textAlign: "right" }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
