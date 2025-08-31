// src/pages/Home.jsx
import { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import Loader from "../components/common/Loader";
import BookList from "../components/books/BookList";
import Pagination from "../components/common/Pagination";

import { fetchBooksByTitle, fetchBooksByAuthor } from "../api/openLibrary";

function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 12;
  const startIndex = (currentPage - 1) * booksPerPage;
  const paginatedBooks = books.slice(startIndex, startIndex + booksPerPage);
  const totalPages = Math.ceil(books.length / booksPerPage);

  // 🔍 Search books function (detect title/author)
  const handleSearch = async (searchQuery, type = "title") => {
    setQuery(searchQuery);
    setLoading(true);
    setCurrentPage(1);
    try {
      let data = [];
      if (type === "title") {
        data = await fetchBooksByTitle(searchQuery);
      } else {
        data = await fetchBooksByAuthor(searchQuery);
      }
      setBooks(data || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Finder</h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}

      {!loading && books.length > 0 && (
        <>
          <BookList books={paginatedBooks} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}

      {!loading && books.length === 0 && query && (
        <p className="text-center text-gray-500 mt-6">
          ❌ No books found for "<b>{query}</b>"
        </p>
      )}
    </div>
  );
}

export default Home;
