import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";
import JoinPage from "./pages/Mypage/JoinPage/JoinPage";
import LoginPage from "./pages/Mypage/LoginPage/LoginPage";
import BookMarkPage from "./pages/Mypage/BookMarkPage/BookMarkPage";
import TooManyRequestPage from "./pages/TooManyRequestPage/TooManyRequestPage";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const authenticate = useSelector(state => state.auth.authenticate);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="news">
            <Route index element={<NewsPage />} />
            <Route path="category/:category" element={<NewsPage />} />
            <Route path=":id" element={<NewsDetailPage />} />
          </Route>
          <Route
            path="mypage"
            element={<PrivateRoute isLogin={authenticate} />}
          />
          <Route path="/mypage/bookmark" element={<BookMarkPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="error" element={<TooManyRequestPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
