import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import Other from "./components/Other";
import MovieDetail from "./components/MovieDetail";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/movies" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="*" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;