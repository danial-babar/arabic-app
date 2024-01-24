// components/SearchBox.tsx
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaArrowLeft } from "react-icons/fa6";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchBoxRef = useRef(null);

  const handleSearch = () => {
    if (query !== "") onSearch(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonSpring = useSpring({
    left: isFocused ? 10 : 50,
    // opacity: isFocused ? 100 : 0,
  });

  const borderColorClass = isFocused ? "border-[#49CAD2]" : "border-[#706f6f]";

  return (
    <div className="text-center">
      <h1 className="mb-4 sm:1xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#ffff]">
        (هُدًى لِّلنَّاسِ وَ بَیِّنٰتٍ مِّنَ الْهُدٰى وَ الْفُرْقَانِۚ)
      </h1>
      <div
        ref={searchBoxRef}
        className={`relative flex bg-white border w-full md:w-[600px] items-center justify-between rounded-md ${borderColorClass}`}
      >
        <animated.button
          style={buttonSpring}
          onClick={handleSearch}
          className="bg-[#49CAD2] text-white p-2 rounded-full mr-3 w-10 h-10 absolute top-1/2 transform -translate-y-1/2 md:absolute md:top-1/2"
        >
          <FaArrowLeft size={20} />
        </animated.button>
        <input
          type="text"
          value={query}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="..... اکتب ھنا"
          className={`px-5 py-4 md:w-[600px] text-[#000] w-full focus:outline-none ${
            isFocused ? "md:h-32" : "md:h-14"
          } sm:h-16 border-0`}
          style={{ textAlign: "right" }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
