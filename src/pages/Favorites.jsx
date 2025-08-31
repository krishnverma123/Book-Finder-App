// src/pages/Favorites.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookList from "../components/books/BookList";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">❤️ My Favorites</h1>

      {favorites.length > 0 ? (
        <BookList books={favorites} />
      ) : (
        <p className="text-center text-gray-500 mt-6">
          You have not added any favorite books yet.
        </p>
      )}
    </div>
  );
}

export default Favorites;
