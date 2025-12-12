import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Tvshows from "./pages/Tvshows";
import People from "./pages/People";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Popular from "./pages/Popular";

const App = () => {
  return (
    <div className={`bg-[#1F1E24] select-none flex`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

export default App;
