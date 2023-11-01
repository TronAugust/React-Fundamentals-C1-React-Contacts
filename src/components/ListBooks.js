import CurrentReads from "./CurrentReads";
import Read from "./Read";
import WantToRead from "./WantToRead";

const ListBooks = () => {
  return (
    <div className="list-books-content">
      <div>
        <CurrentReads />
        <WantToRead />
        <Read />
      </div>
    </div>
  );
};

export default ListBooks;
