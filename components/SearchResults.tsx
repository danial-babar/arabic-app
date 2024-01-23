// components/SearchResult.tsx
import React from 'react';

interface SearchResultProps {
  results: string[];
}

const SearchResults: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index} className="result-box p-4 mb-4 border border-gray-300 rounded-md">
          {result}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
