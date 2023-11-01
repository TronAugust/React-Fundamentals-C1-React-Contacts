import ChangeOptions from "./ChangeOptions";
import { useEffect, useState } from "react";
import { getAll, update } from "../utils/BookAPI";

const CurrentRead = ({ book }) => {
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
  const [selectedShelf, setSelectedShelf] = useState(book?.shelf || "none");

  const handleChangeUpdate = (newShelf) => {
    setSelectedShelf(newShelf);

    if (book && "id" in book) {
      update(book, newShelf)
        .then((updated) => {
          console.log("update completed: ", updated);
        })
        .catch((error) => {
          console.error("Update Fail!", error);
          setSelectedShelf(book.shelf);
        });
    } else {
      return console.error("Update Fail! ID does not exist");
    }
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "currentlyReading")
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
                      <ChangeOptions
                        currentShelf={selectedShelf}
                        onUpdate={handleChangeUpdate}
                      />
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
                {console.log(book.id)}
              </li>
            ))}
          {console.log(
            books.filter((book) => book.shelf === "currentlyReading")
          )}
        </ol>
      </div>
    </div>
  );
};

export default CurrentRead;
