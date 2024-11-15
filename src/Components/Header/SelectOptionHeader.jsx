// import React from "react";
// import "../../style/style.css"

// const SelectOptionHeader = ({ options }) => (
//   <select className="nav-select">
//     {options.map((option, index) => (
//       <option key={index} value={option} >
//         {option}
//       </option>
//     ))}
//   </select>
// );

// export default SelectOptionHeader;

import React, { useState } from "react";
import "../../style/style.css";

const SelectOptionHeader = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="nav-select">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selected}
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectOptionHeader;


