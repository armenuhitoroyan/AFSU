import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./Components/Other/Loader";
import Home3 from "./Components/Homepages/Home3";
import Home1 from "./Components/Homepages/Home";
// import Homepage4Light from "./Components/Homepages/Homepage4Light";
// import Homepage4Dark from "./Components/Homepages/Homepage4Dark";

import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Blogs from "./Components/Blog";
import Contact from "./Components/Contact";
import NoPage from "./Components/NoPage";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
           <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="*" element={<NoPage />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
