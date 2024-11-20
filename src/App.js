import "./App.css";
import React, { useState, useEffect } from "react";

import Loader from "./Components/Other/Loader";
// import Home3 from "./Components/Homepages/Home3";
// import Home1 from "./Components/Homepages/Home";
import Home3 from "./Components/Homepages/Home3";

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
           
            <Home3 />
          
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
