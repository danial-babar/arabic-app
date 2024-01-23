// pages/search.tsx
import SearchResults from '@/components/SearchResults';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


const Search: React.FC = () => {
  const router = useRouter();
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    // Get search results based on the query from the URL
    const query = router.query.q as string;
    console.log('Query:', query);

    // Implement your search logic here and set the results
    // For now, let's set some dummy results
    setResults(['Result 1', 'Result 2', 'Result 3']);
  }, [router.query.q]);

  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      <div className="mx-auto max-w-screen-xl p-4">
        {/* Display Search Results */}
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default Search;
