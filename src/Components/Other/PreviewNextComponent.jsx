import React from "react";

const PreviewNextComponent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          background: "lightgrey",
          height: "80px",
          borderRadius: "20px",
        }}
      >
        <a
          style={{
            width: "40px",
            height: "78px",
            border: "1 px solid grey",
            borderRadius: "10px",
            background: "white",
          }}
          href="#"
        ></a>
        <span style={{ marginRight: "35%", fontWeight: "bold" }}>
          prev-work
        </span>
        <span style={{ marginLeft: "35%", fontWeight: "bold" }}>next-work</span>
        <a
          style={{
            width: "40px",
            height: "79px",
            border: "1 px solid grey",
            borderRadius: "10px",
            background: "white",
          }}
          href="#"
        ></a>
      </div>
    </>
  );
};

export default PreviewNextComponent;
