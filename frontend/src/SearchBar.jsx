import React, { useCallback, useEffect, useState } from "react";
import { Search, Mic } from "lucide-react";
import getCurrentLocation from "./api/getCurrentLocation";

const sampleData = [
  {
    id: 1,
    title: "React Official Documentation",
    url: "https://reactjs.org/",
  },
  {
    id: 2,
    title: "Mozilla Developer Network (MDN)",
    url: "https://developer.mozilla.org/",
  },
  {
    id: 3,
    title: "Stack Overflow",
    url: "https://stackoverflow.com/",
  },
  {
    id: 4,
    title: "GitHub",
    url: "https://github.com/",
  },
  {
    id: 5,
    title: "npm",
    url: "https://www.npmjs.com/",
  },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [location, setLocation] = useState({});

  const debounce = (func, delay) => {
    let timeoutID;

    return (...args) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((term) => {
      if (term.trim() === "") {
        setSearchResults({});
      } else {
        const results = sampleData.filter((item) =>
          item.title.toLowerCase().includes(term.toLowerCase()),
        );
        setSearchResults(results);
      }
    }, 300),
    [],
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const data = await getCurrentLocation();
        setLocation(data);
      } catch (error) {
        console.error("Failed to fetch location context:", error);
      }
    };

    fetchLocationData();
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex items-center top-0 left-0 right-0 bottom-0 justify-self-center align-middle w-3/4 px-4 z-20">
      <div className="flex flex-col items-center p-4 w-full max-h-12 sm:max-h-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mb-2 min-w-48 max-w-1/2 w-full"
        >
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full rounded-full border border-gray-200 px-5 py-3 pr-20 text-base shadow-md transition-shadow duration-200 hover:shadow-lg focus:border-gray-300 focus:outline-none"
              placeholder={
                location.city
                  ? `Near ${location.city}, ${location.region}...`
                  : "Search near you..."
              }
            />
            <div className="absolute right-0 top-0 mr-4 mt-3 flex items-center">
              <button
                type="button"
                className="mr-3 text-gray-400 hover:text-gray-600"
                onClick={() =>
                  alert(
                    "Voice search is unsupported in this demo.\nTry implementing this feature yourself 🙂",
                  )
                }
              >
                {/*todo add voice capability <Mic size={20} />{" "}*/}
              </button>{" "}
              <button
                type="submit"
                className="text-blue-500 hover:text-blue-600"
              >
                <Search size={20} />{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </form>{" "}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-white opacity-100 p-4 shadow-md z-50">
            <h2 className="mb-4 text-xl font-bold"> Search Results: </h2>{" "}
            <ul>
              {" "}
              {searchResults.map((result) => (
                <li key={result.id} className="mb-2">
                  <a
                    href={result.url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {result.title}{" "}
                  </a>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default SearchBar;
