// src/components/books/BookCard.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import noCover from "../../assets/no-cover.png";
import { FavoritesContext } from "../../context/FavoritesContext";

function BookCard({ book }) {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : noCover;

  const title = book.title || "Untitled";
  const author = book.author_name ? book.author_name.join(", ") : "Unknown Author";

  const isFav = favorites.some((b) => b.key === book.key);

  // ✅ Updated: navigate to /details/:id
  const handleClick = () => {
    const id = book.key.replace("/works/", ""); // OpenLibrary work key se id nikalna
    navigate(`/details/${id}`, { state: { book } });
  };

  // Toggle favorite
  const toggleFavorite = (e) => {
    e.stopPropagation(); // click Details pe interfere na kare
    if (isFav) removeFavorite(book.key);
    else addFavorite(book);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
    >
      {/* Book Cover */}
      <img
        src={coverUrl}
        alt={title}
        className="w-full h-56 object-cover rounded-lg mb-3"
      />

      {/* Title */}
      <h3
        className="text-lg font-semibold text-gray-800 text-center truncate w-full"
        title={title}
      >
        {title}
      </h3>

      {/* Author */}
      <p className="text-sm text-gray-500 text-center truncate w-full">
        {author}
      </p>

      {/* Favorites Button */}
      <button
        onClick={toggleFavorite}
        className="mt-2 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
      >
        {isFav ? "💔 Remove" : "❤️ Add to Favorites"}
      </button>
    </div>
  );
}

export default BookCard;
