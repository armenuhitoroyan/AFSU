import React from "react";

const DownloadButton = ({ text, href, download, className, color }) => (
  <a
    className={className}
    href={href}
    download={download}
    style={{
      display: "inline-block",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "bold",
      width: "100%",
      padding: "20px",
      borderRadius: "50px",
      color: color,
      borderColor: color,
    }}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        marginRight: "8px",
        verticalAlign: "middle",
        marginBottom: "-20px",
      }}
    >
      <path d="M8 0a.5.5 0 0 1 .5.5v9.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V.5A.5.5 0 0 1 8 0zm-6 12.5a.5.5 0 0 1 .5.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
    </svg>
    {text}
  </a>
);

export default DownloadButton;
