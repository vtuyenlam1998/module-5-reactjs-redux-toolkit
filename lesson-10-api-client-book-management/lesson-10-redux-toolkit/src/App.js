import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./component/book/BookList";
import BookDetail from "./component/book/BookDetail";
import BookAdding from "./component/book/BookAdding";
import BookEditing from "./component/book/BookEditing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path={`/book/:bookId`} element={<BookDetail />} />
        <Route path={"/book/add"} element={<BookAdding />} />
        <Route path={`/book/edit/:bookId`} element={<BookEditing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
