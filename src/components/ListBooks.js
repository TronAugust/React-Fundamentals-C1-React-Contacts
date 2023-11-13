import CurrentReads from "./CurrentReads";
import Read from "./Read";
import WantToRead from "./WantToRead";

const ListBooks = ({ books, onUpdateShelf }) => {
  return (
    <div className="list-books-content">
      <div>
        <CurrentReads books={books} onUpdateShelf={onUpdateShelf} />
        <WantToRead books={books} onUpdateShelf={onUpdateShelf} />
        <Read books={books} onUpdateShelf={onUpdateShelf} />
      </div>
    </div>
  );
};

export default ListBooks;
