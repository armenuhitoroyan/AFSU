import React, { useState } from "react";
import "../../style/Pagination.css"; // External CSS file for styling

const Pagination = ({ totalPages = 3 }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (button) => {
    setHovered(button);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="pagination-container">
      <button
        className={`pagination-button prev-button ${
          hovered === "prev" ? "hovered" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("prev")}
        onMouseLeave={handleMouseLeave}
      >
        prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <span key={index} className="pagination-number">
          {index + 1}
        </span>
      ))}

      <span className="dots">...</span>

      <button
        className={`pagination-button next-button ${
          hovered === "next" ? "hovered" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("next")}
        onMouseLeave={handleMouseLeave}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
