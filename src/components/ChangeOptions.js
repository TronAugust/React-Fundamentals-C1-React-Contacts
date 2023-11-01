const ChangeOptions = ({ currentShelf, onUpdate }) => {
  const handleChangeOptions = (event) => {
    const newShelf = event.target.value;
    onUpdate(newShelf);
  };
  return (
    <div className="book-shelf-changer">
      <select value={currentShelf} onChange={handleChangeOptions}>
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
