const Circle = ({ width, height, borderPx, color, top, left }) => {
  return (
    <div
      className="circle"
      style={{
        width: width,
        height: height,
        border: `${borderPx} solid ${color}`,
        top: top || "0px",
        left: left || "0px",
        marginInline: "10px",
      }}
    ></div>
  );
};

export default Circle;
