import { useState } from "react";
const ChangeOptions = ({ book, onUpdate }) => {
  const [selectedShelf, setSelectedShelf] = useState(book.shelf || "none");

  const handleChangeOptions = (event) => {
    const newShelf = event.target.value;
    setSelectedShelf(newShelf);
    onUpdate(book, newShelf);
  };
  return (
    <div className="book-shelf-changer">
      <select value={selectedShelf} onChange={handleChangeOptions}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ChangeOptions;
