import React, { useEffect, useState } from "react";
import {
  selectBookDetail,
  getBook,
  removeBook,
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function BookDetail() {
  const [book, setBook] = useState([]);
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookDetail = useSelector(selectBookDetail);

  const getBookDetail = async () => {
    if (bookDetail == null) {
      dispatch(getBook(bookId));
    } else {
      setBook(bookDetail);
    }
  };

  useEffect(() => {
    getBookDetail();

    // eslint-disable-next-line
  }, [bookId, bookDetail]);

  function getBackBookList() {
    navigate("/");
    window.location.reload();
  }

  function removeCurrentBook() {
    if (bookId) {
      dispatch(removeBook(bookId));
      alert(`Remove book ${JSON.stringify(bookDetail)} successfully!!!`);
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <div>
      <h1>Book Detail</h1>
      <p>
        <b>Id:</b> {book.id}
      </p>
      <p>
        <b>Title:</b> {book.title}
      </p>
      <p>
        <b>Quantity:</b> {book.quantity}
      </p>
      <button type="button" onClick={getBackBookList}>
        Back
      </button>
      &nbsp;
      <button type="button" onClick={removeCurrentBook}>
        Remove
      </button>
    </div>
  );
}
