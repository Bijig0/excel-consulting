import React from "react";

// Define the styles for the spinner
const spinnerStyles = {
  border: "10px solid #f3f3f3", // Light grey
  borderTop: "10px solid #3498db", // Blue
  borderRadius: "50%",
  width: "80px",
  height: "80px",
  animation: "spin 1s linear infinite",
};

// Define the @keyframes for the spinner animation
const spinAnimation = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Create the Spinner component
const Spinner = () => (
  <div
    style={spinnerStyles}
    dangerouslySetInnerHTML={{ __html: spinAnimation }}
  />
);

export default Spinner;
