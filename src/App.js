import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewsPage from "./pages/NewsPage/NewsPage";
<<<<<<< HEAD
=======
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";
>>>>>>> 30a404b (conflict fix)
import MyPage from "./pages/Mypage/Mypage";
import JoinPage from "./pages/Mypage/JoinPage/JoinPage";
import LoginPage from "./pages/Mypage/LoginPage/LoginPage";
import BookMarkPage from "./pages/Mypage/BookMarkPage/BookMarkPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="news">
            <Route index element={<NewsPage />} />
            <Route path=":id" element={<NewsDetailPage />} />
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
