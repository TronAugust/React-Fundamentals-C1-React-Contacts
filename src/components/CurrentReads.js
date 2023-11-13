import ChangeOptions from "./ChangeOptions";

const CurrentRead = ({ books, onUpdateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books
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
      </div>
    </div>
  );
};

export default CurrentRead;
