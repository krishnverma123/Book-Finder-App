// src/components/common/SearchBar.jsx
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const [type, setType] = useState("title"); // default: title

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input, type);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-6">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="title">By Title</option>
        <option value="author">By Author</option>
      </select>
      <input
        type="text"
        placeholder={`Search books by ${type}...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded-lg w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
