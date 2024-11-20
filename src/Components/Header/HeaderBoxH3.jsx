import React from "react";
// import imgH3 from "../../public/images/home-img-3.png";
import "../../style/Home3HeaderBox.css";

import Circle from "./Circle";

const HeaderBoxH3 = () => {
  return (
    <div className="headerBoxContent">
      <div>
        <div
          className="flex justify-between md:flex-row"
          style={{ height: "460px", margi: "0px", padding: "0px" }}
        >
          <div className="header-box-container">
            <h2 className="text-3xl font-bold ">HELLO I AM</h2>
            <h1 className="text-5xl font-bold ">Allison Parker</h1>
            <p>Web Designer & Photographer</p>
            <h3>
              <a href="mailto:#">infoname@domain.com</a>
            </h3>
            <p>36 East 8th Street, New York, NY 10003, United States</p>

            <div style={{ width: "100%" }}>
              <div className="flex md:flex-row freelance-available">
                <Circle
                  width="50px"
                  height="50px"
                  borderPx="2px"
                  color="gray"
                />
                <Circle
                  width="50px"
                  height="50px"
                  borderPx="2px"
                  color="gray"
                />
                <Circle
                  width="50px"
                  height="50px"
                  borderPx="2px"
                  color="gray"
                />
              </div>
            </div>
          </div>

          <div>
            <img
              className="w-16 md:w-32 lg:w-48"
              src="../../images/home-img-3.png"
              alt="User"
              style={{
                position: "relative",
                width: "90%",
                marginTop: "-300px",
                marginRight: "150px",
                zIndex: "4",
              }}
            />

            <div
              style={{
                width: "450px",
                height: "450px",
              }}
            >
              <img
                className="w-16 md:w-32 lg:w-48 dot"
                src="../../images/dots-1.png"
                alt="User"
                style={{
                  position: "relative",
                  width: "90%",
                  marginTop: "-650px",
                  marginLeft: "350px",
                  zIndex: "3",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBoxH3;
