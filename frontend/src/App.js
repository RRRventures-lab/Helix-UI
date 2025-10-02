import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Releases from "./pages/Releases";
import About from "./pages/About";
import Merch from "./pages/Merch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/about" element={<About />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;