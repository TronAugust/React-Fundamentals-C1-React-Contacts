import "../css/App.css";
import { useEffect, useState } from "react";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import { getAll, update } from "../utils/BookAPI";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const toggleSearchPage = () => {
    setShowSearchPage(!showSearchPage);
  };

  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    getAll().then((data) => setBooks(data));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const onUpdateShelf = (book, shelf) => {
    update(book, shelf)
      .then((updateBook) => {
        setBooks((prevBooks) => {
          prevBooks.map((b) => (b.id === updateBook.id ? updateBook : b));
        });
        loadBooks();
        console.log("updated!");
      })
      .catch((error) => {
        console.log("!!!!!!!!", error);
      });
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks
          onClose={toggleSearchPage}
          allBook={books}
          onUpdateShelf={onUpdateShelf}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBooks books={books} onUpdateShelf={onUpdateShelf} />
          <div className="open-search">
            <a onClick={toggleSearchPage}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
