import React from "react";
import "../../style/NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <nav>
      <select name="Navbar" id="homepages" onChange={handleNavigation}>
        <option value="">Select a Page</option>
        <option value="/">Home</option>
        <option value="/Home3">Home 3</option>
        <option value="/Homepage4Light">Home 4 Light</option>
        <option value="/Homepage4Dark">Home 4 Dark</option>
      </select>
    </nav>
  );
};

export default NavBar;

// import Home1 from "./Homepages/Home";
// import Home3 from "./Homepages/Home3";
// import Homepage4Light from "./Homepages/Homepage4Light";
// import Homepage4Dark from "./Homepages/Homepage4Dark";
// import NavBar from "./Other/NavBar";

// <Routes>
//   <Route path="/" element={<NavBar />}>
//     <Route index element={<Home1 />} />
//     <Route path="Home3" element={<Home3 />} />
//     <Route path="Homepage4Light" element={<Homepage4Light />} />
//     <Route path="Homepage4Dark" element={<Homepage4Dark />} />
//   </Route>
// </Routes>
