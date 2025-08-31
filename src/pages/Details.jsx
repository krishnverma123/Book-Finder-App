// src/pages/Details.jsx
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import noCover from "../assets/no-cover.png";
import { FavoritesContext } from "../context/FavoritesContext";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const book = location.state?.book;

  if (!book) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">❌ No book selected!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : noCover;

  const isFav = favorites.some((b) => b.key === book.key);

  const toggleFavorite = () => {
    if (isFav) removeFavorite(book.key);
    else addFavorite(book);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
      {/* Book Cover */}
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-md"
      />

      {/* Book Details */}
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-gray-700 text-lg">
          <b>Author:</b> {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-gray-600">
          <b>First Published:</b> {book.first_publish_year || "N/A"}
        </p>
        <p className="text-gray-600">
          <b>Publisher:</b> {book.publisher ? book.publisher.join(", ") : "Unknown"}
        </p>
        <p className="text-gray-600 mt-4">
          <b>ISBN:</b> {book.isbn ? book.isbn.join(", ") : "N/A"}
        </p>

        {/* Favorites Button */}
        <button
          onClick={toggleFavorite}
          className="mt-4 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-fit"
        >
          {isFav ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
        </button>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-fit"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Details;
