import React from "react";

const AnimatedShapes = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "250px",
        height: "300px",
        border: "2px solid transparent",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "rotate 10s infinite linear", // Rotate animation for entire component
      }}
    >
      {/* Outer Circle 1 */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "85%",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: "2px solid white",
          animation: "float 5s infinite ease-in-out",
        }}
      ></div>

      {/* Outer Circle 2 */}
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "10%",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid white",
          animation: "float 6s infinite ease-in-out",
        }}
      ></div>

      {/* Triangle 1 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "0",
          height: "0",
          animation: "float 7s infinite ease-in-out",
        }}
      >
        {/* Background triangle */}
        <div
          style={{
            position: "absolute",
            width: "0",
            height: "0",
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderBottom: "27px solid ",
          }}
        />
        {/* Border triangle */}
        <div
          style={{
            position: "absolute",
            width: "0",
            height: "0",
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderBottom: "30px solid white",
            top: "-1px",
            left: "-1px",
            zIndex: -1,
          }}
        />
      </div>

      {/* Small Circle */}
      <div
        style={{
          position: "absolute",
          bottom: "40%",
          left: "55%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          animation: "float 7s infinite ease-in-out",
        }}
      ></div>

      {/* Dot/Point 1 */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "75%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "white",
          animation: "float 6s infinite ease-in-out",
        }}
      ></div>

      {/* Inline keyframes for floating and rotation animations */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedShapes;
