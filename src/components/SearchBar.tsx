import React, { useState } from "react";

function SearchBar({ onSearch }: any) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a player"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
