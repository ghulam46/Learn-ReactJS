import "../App.css";
import React from "react";

// Inisiasi untuk tag router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Inisiasi untuk component antar route
import { Home } from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio";
import { AboutUs } from "./Pages/AboutUs";
import { Navbar } from "./Pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function ReactRouter() {
  const [username, setUsername] = useState("Ghulam");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            {/* Syntax for Route */}
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/aboutus" element={<AboutUs />} />

            {/* Handling eror for route undefine */}
            <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default ReactRouter;
