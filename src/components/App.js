import "../css/App.css";
import React, { useState } from "react";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const toggleSearchPage = () => {
    setShowSearchPage(!showSearchPage);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks onClose={toggleSearchPage} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBooks />
          <div className="open-search">
            <a onClick={toggleSearchPage}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
