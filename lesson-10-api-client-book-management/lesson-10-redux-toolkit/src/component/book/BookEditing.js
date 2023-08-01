import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  selectBookDetail,
  editBook,
  getBook,
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function BookEditing() {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const isCreate = !bookId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookDetail = useSelector(selectBookDetail);
  const success = useSelector(selectSuccess);

  const getBookDetail = async () => {
    if (bookDetail == null) {
      dispatch(getBook(bookId));
    } else {
      const { id, title, quantity } = bookDetail;
      const currentBookDetail = {id, title, quantity };
      setBook(currentBookDetail);
    }
  };

  useEffect(() => {
    getBookDetail();

    // eslint-disable-next-line
  }, [success]);

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(editBook(book));
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
      <h1>Book Edit</h1>
      <form>
        <div>
          <label>Id</label>
          <input
            readOnly
            name="id"
            value={book.id || ""}
            onChange={handleChange}
          />
        </div>
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
          Edit
        </button>
      </form>
    </div>
  );
}
