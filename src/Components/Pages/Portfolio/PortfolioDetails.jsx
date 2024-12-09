import React from "react";

const PortfolioDetails = () => {
  return (
    <div
      style={{
        border: "2px solid #d4d4d4",
        borderRadius: "10px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#6c63ff",
              fontSize: "20px",
              marginRight: "10px",
            }}
          >
            ℹ️
          </span>
          <span style={{ fontWeight: "bold", color: "#444" }}>CLIENT:</span>
        </div>
        <div style={{ color: "#888" }}>COMPANY</div>
      </div>

      <hr style={{ border: "0.5px solid #e5e5e5" }} />

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#6c63ff",
              fontSize: "20px",
              marginRight: "10px",
            }}
          >
            🏷️
          </span>
          <span style={{ fontWeight: "bold", color: "#444" }}>CATEGORY:</span>
        </div>
        <div style={{ color: "#888" }}>PORTFOLIO, PHOTOS, AGENCY</div>
      </div>

      <hr style={{ border: "0.5px solid #e5e5e5" }} />

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#6c63ff",
              fontSize: "20px",
              marginRight: "10px",
            }}
          >
            📅
          </span>
          <span style={{ fontWeight: "bold", color: "#444" }}>DATE:</span>
        </div>
        <div style={{ color: "#888" }}>
          START: DECEMBER 10, 2021 <br />
          END: JUNE 12, 2025
        </div>
      </div>

      <hr style={{ border: "0.5px solid #e5e5e5" }} />

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#6c63ff",
              fontSize: "20px",
              marginRight: "10px",
            }}
          >
            📂
          </span>
          <span style={{ fontWeight: "bold", color: "#444" }}>RESOURCES:</span>
        </div>
        <div style={{ color: "#888" }}>PSD DOCUMENT VECTOR FILE DOCUMENT</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            background: "linear-gradient(90deg, #6c63ff, #4a47a3)",
            border: "none",
            borderRadius: "25px",
            padding: "10px 20px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default PortfolioDetails;
