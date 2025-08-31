// src/context/FavoritesContext.jsx
import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => setFavorites([...favorites, book]);
  const removeFavorite = (key) =>
    setFavorites(favorites.filter((b) => b.key !== key));

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
