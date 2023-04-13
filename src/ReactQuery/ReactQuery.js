import "../App.css";
import React from "react";

// Inisiasi untuk tag router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Inisiasi untuk component antar route
import { Home } from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio";
import { AboutUs } from "./Pages/AboutUs";
import { Navbar } from "./Pages/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function ReactRouter() {
  // defaultOption and queries refetchWindowFocus false handle api unrefresh automatic
  // if value false, then unrefresh automatic
  // if value true, then refresh the api data
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </div>
  );
}

export default ReactRouter;
