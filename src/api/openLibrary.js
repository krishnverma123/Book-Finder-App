// src/api/openLibrary.js

// Title se search
export async function fetchBooksByTitle(title) {
  const response = await fetch(
    `https://openlibrary.org/search.json?title=${title}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books by title");
  }
  const data = await response.json();
  return data.docs;
}

// Author se search
export async function fetchBooksByAuthor(author) {
  const response = await fetch(
    `https://openlibrary.org/search.json?author=${author}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books by author");
  }
  const data = await response.json();
  return data.docs;
}
