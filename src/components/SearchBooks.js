import React, { useEffect, useState } from "react";
import { getAll, search } from "../utils/BookAPI";
import ChangeOptions from "./ChangeOptions";

const SearchBooks = ({ onClose, allBook, onUpdateShelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(allBook);

  useEffect(() => {
    const handleSearch = () => {
      if (query) {
        search(query, 10)
          .then((data) => {
            if (Array.isArray(data) || typeof data === "object") {
              return setResults(data);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        getAll()
          .then((data) => {
            if (Array.isArray(data)) {
              return setResults(data);
            }
          })
          .catch((error) => {
            console.log("Loadding error!:", error);
          });
      }
    };

    handleSearch();
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={onClose} />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {console.log(results)}
        {results.length > 0 ? (
          <ol className="books-grid">
            {results.map((book) => (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div key={book.id}>
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url('${book.imageLinks.thumbnail}')`,
                        }}
                      ></div>
                      <ChangeOptions book={book} onUpdate={onUpdateShelf} />
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div>
            <p>No result!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;
