import "./App.css";
import React, { useState, useEffect } from "react";
import Footercomponent from "./Components/Footer/FooterComponent";

import Menu from "./Components/Header/Header";
import Loader from "./Components/Other/Loader";
// import Home3 from "./Components/Homepages/Home3";
import Home1 from "./Components/Homepages/Home";

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
            <Menu />
            <Home1 />
            <Footercomponent />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
