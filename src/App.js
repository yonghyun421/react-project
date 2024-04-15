import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
