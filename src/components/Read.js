import ChangeOptions from "./ChangeOptions";
import { useEffect, useState } from "react";
import { getAll } from "../utils/BookAPI";

const Read = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "read")
            .map((book) => (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div key={book.id}>
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: book.imageLinks.thumbnail,
                        }}
                      ></div>
                      <ChangeOptions />
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Read;
