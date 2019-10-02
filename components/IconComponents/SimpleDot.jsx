import React from "react";

const SimpleDot = ({
  fill = "#000",
  width,
  height,
  stroke = "none",
  className
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 272.5 272.5"
    className={`${className || ""}`}
  >
    <g>
      <path
        id="error-icon"
        stroke={stroke}
        strokeWidth="1"
        fill={fill}
        fillRule="nonzero"
        d="M272.5,136.3c0,75.3-61,136.3-136.3,136.3S0,211.5,0,136.3S61,0,136.3,0S272.5,61,272.5,136.3z"
      />
    </g>
  </svg>
);

export default SimpleDot;
