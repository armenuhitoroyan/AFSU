import React, { useEffect } from "react";
import "../../style/Error404.css";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";

import WebPages from "../Footer/WebPages";

const Error404 = () => {
  useEffect(() => {
    window.particlesJS("page404-container", {
      particles: {
        number: { value: 200 },
        size: { value: 3 },
        move: { speed: 5 },
        line_linked: { enable: true },
      },
    });
  }, []);
  return (
    <div id="page404-container" className="page404">
      <div className="error-page">
        <div className="content-container">
          <h1
            style={{ display: "flex", justifyContent: "center" }}
            className="error-code"
          >
            <span>4</span>{" "}
            <PiSmileyXEyesFill
              style={{
                color: "#7a45c6",
                marginTop: "50px",
              }}
            />
            <span>4</span>
          </h1>

          <h2 className="error-message">Ooops, Page Not Found</h2>
          <p className="error-description">
            We can&apos;t seem to find the page you&apos;re looking for.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Enter Keyword..." />
            <button>
              <BiSearch />
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "450px", position: "absolute", zIndex: "4" }}>
        <div
          className="w-full flex-col flex justify-center md:flex-row"
          style={{ padding: "25%" }}
        >
          <WebPages width={200} />
        </div>
        <h5 style={{ color: "white", margin: "0 auto" }}>
          Copyright © 2024 AfsuBy Tohidur Hasan, All Rights Reserved
        </h5>
      </div>
    </div>
  );
};

export default Error404;
