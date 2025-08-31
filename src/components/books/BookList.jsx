// src/components/books/BookList.jsx
import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  if (!books || books.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default BookList;
