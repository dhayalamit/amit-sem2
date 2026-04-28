import React, { useState } from "react";

const Search = () => {

  // 🔹 Step 1: input ka state
  const [query, setQuery] = useState("");

  // 🔹 Step 2: names array
  const names = [
    "Priya", "Rahul", "Ankit", "Rohan",
    "Sneha", "Aman", "Kunal", "Neha", "Arjun"
  ];

  // 🔹 Step 3: filtering logic (case-insensitive)
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Search Names</h1>

      {/* 🔹 Input field */}
      <input
        type="text"
        placeholder="Search name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* 🔹 Results */}
      <div className="list">
        {
          filteredNames.length > 0 ? (
            filteredNames.map((name, index) => (
              <p key={index}>{name}</p>
            ))
          ) : (
            <p className="no-result">No results found</p>
          )
        }
      </div>

    </div>
  );
};

export default Search;