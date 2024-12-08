"use client";  
import { useState } from 'react';
import SearchBar from './SearchBar'; 
import Link from 'next/link';  

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);  

  const handleSearch = async (searchValue) => {
    try {
      // Fetch data from iTunes API for podcasts
      const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchValue)}&media=podcast`);  
      const data = await response.json();  
      setSearchResults(data.results); // iTunes API returns results in the "results" key
    } catch (error) {
      console.error("Error during search:", error); 
    }
  };

  return (
    <>
    <div className='flex flex-col h-screen w-screen'>
      <SearchBar onSearch={handleSearch} /> 
      <div className="flex flex-wrap gap-6 p-4 overflow-y-auto">  
        {searchResults.map((result, index) => (
            <Link href={result.collectionViewUrl} key={index}>
              <div className="flex flex-col items-center cursor-pointer">  
                <img src={result.artworkUrl100} 
                     alt={result.artistName} className="w-32 h-32 object-cover rounded-lg" /> 
                <div className="text-white mt-2 text-center w-36">  
                  <p>  
                    {result.collectionName}  
                  </p>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default SearchPage;
