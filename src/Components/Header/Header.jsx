import React from "react";
import SelectOptionHeader from "./SelectOptionHeader";

const Header = () => {
  return (
    <div style={{ display: "flex", padding: "10px", width: "55%" }}>
      <SelectOptionHeader
        options={[
          "Home 1",
          "Home 2",
          "Home 3",
          "Home 4 ( light )",
          "Home 4 ( dark )",
        ]}
      />
      <SelectOptionHeader options={["Services", "Services Details"]} />
      <SelectOptionHeader
        options={["Portfolio 1", "Portfolio 2", "Portfolio 3"]}
      />
      <SelectOptionHeader
        options={["Our Blog", "Blog details 1", "Blog details 2"]}
      />
      <SelectOptionHeader options={["About", "Pricing Plans", "404"]} />

      <SelectOptionHeader options={["Contact"]} />
    </div>
  );
};

export default Header;
