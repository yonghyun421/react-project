import "./App.css"
import React from "react"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Homepage from "./pages/Homepage/Homepage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import NewsPage from "./pages/NewsPage/NewsPage"
import NewsDetail from "./pages/NewsDetailPage/NewsDetailPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="news">
          <Route index element={<NewsPage />} />
          <Route path=":id" element={<NewsDetail />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
