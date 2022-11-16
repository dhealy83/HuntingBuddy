// React import
import React from "react";

// import logo from "./logo.svg";
import "./App.css";

// React Router
import { Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/Map" element={<Map />} />
      </Routes>

      <Footer fixed="bottom" />
    </>
  );
};

export default App;
