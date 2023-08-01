import React, { useState } from "react";
import {
  selectBookAdded,
  addBook,
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function BookAdding() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const isCreate = !bookId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookAdded = useSelector(selectBookAdded);

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(addBook(book));
    setBook(bookAdded);
    alert(
      `${isCreate ? "Create" : "Edit"} book ${JSON.stringify(
        book
      )} successfully!!!`
    );
    navigate("/");
    window.location.reload();
  }
  
  function getBackBookList() {
    navigate("/");
  }

  return (
    <div>
      <h1>Book Add</h1>
      <form>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={book.title || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            name="quantity"
            value={book.quantity || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={getBackBookList}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
