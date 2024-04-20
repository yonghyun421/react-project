import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";
import MyPage from "./pages/Mypage/Mypage";
import JoinPage from "./pages/Mypage/JoinPage/JoinPage";
import LoginPage from "./pages/Mypage/LoginPage/LoginPage";
import BookMarkPage from "./pages/Mypage/BookMarkPage/BookMarkPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="news">
            <Route index element={<NewsPage />} />
            <Route path="category/:category" element={<NewsPage />} />
            <Route path=":id" element={<NewsDetail />} />
          </Route>
          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="join" element={<JoinPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="bookmark" element={<BookMarkPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
