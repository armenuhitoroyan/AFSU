import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./Components/Other/Loader";
import Home1 from "./Components/Homepages/Home";
import Home3 from "./Components/Homepages/Home3";
import Home2 from "./Components/Homepages/Home2";
import Homepage4Light from "./Components/Homepages/Homepage4Light";
import Homepage4Dark from "./Components/Homepages/Homepage4Dark";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Navbar from "./pages/Navbar";
import Error404 from "./Components/Pages/Error404";
import AboutMe from "./Components/Pages/AboutMe";
import PricingPlans from "./Components/Pages/PricingPlans";
import PortfolioDetails1 from "./Components/Pages/Portfolio/PortfolioDetails1";
import PortfolioDetails2 from "./Components/Pages/Portfolio/PortfolioDetails2";
import PortfolioDetails3 from "./Components/Pages/Portfolio/PortfolioDetails3";
import OurBlog from "./Components/Pages/Blog/OurBlog";
import Blog1 from "./Components/Pages/Blog/Blog1";
import Blog2 from "./Components/Pages/Blog/Blog2";
import ServicesDetail from "./Components/Pages/ServicesDetail";
import { useWebSocket } from "./Hooks/useWebSocket";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const { isConnected, isOnline, connectionError } = useWebSocket(
    "http://localhost:4000"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Define background colors for specific routes
  const backgroundColors = {
    "/": "white",
    "/portfolio": "#654321",
    "/blogs": "#abcdef",
    "*": "#333333", // Default for unmatched routes
  };

  const currentBackgroundColor =
    backgroundColors[location.pathname] || "#ffffff";

  // Check if the current route is for Homepage4Light or Homepage4Dark
  const hideNavbar =
    location.pathname === "/home4-light" || location.pathname === "/home4-dark";

  const showLoader =
    loading || !isOnline || (isOnline && !isConnected && connectionError);

  return (
    <div className="App">
      <div>
        {loading ? ( // loading showLoader
          <Loader />
        ) : (
          <div
            style={{
              background: currentBackgroundColor,
              // Ensure it covers the viewport
              paddingInline: "20px",
              paddingBottom: "10px",
            }}
          >
            {/* Conditionally render Navbar */}
            {!hideNavbar && (
              <div
                style={{
                  backgroundColor: "blue",
                }}
              >
                <Navbar />
              </div>
            )}
            <Routes>
              <Route index element={<Home1 />} />
              <Route path="/home1" element={<Home1 />} />
              <Route path="/home3" element={<Home3 />} />
              <Route path="/index-2" element={<Home2 />} />
              <Route path="/home4-light" element={<Homepage4Light />} />
              <Route path="/home4-dark" element={<Homepage4Dark />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services-details" element={<ServicesDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/pricing-plans" element={<PricingPlans />} />
              <Route path="/404" element={<Error404 />} />
              <Route
                path="/portfolio-details-1"
                element={<PortfolioDetails1 />}
              />
              <Route
                path="/portfolio-details-2"
                element={<PortfolioDetails2 />}
              />
              <Route
                path="/portfolio-details-3"
                element={<PortfolioDetails3 />}
              />
              <Route path="/our-blog" element={<OurBlog />} />
              <Route path="/blog-details1" element={<Blog1 />} />
              <Route path="/blog-details2" element={<Blog2 />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
