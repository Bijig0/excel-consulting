import React from "react";

const ErrorText = ({ children }: { children: React.ReactNode }) => {
  // Define the styles as an object
  const styles = {
    fontSize: "0.875rem", // Equivalent to 'text-sm' in Tailwind CSS
    color: "#dc2626", // Equivalent to 'text-red-600' in Tailwind CSS
  };

  // Apply the styles directly to the element
  return <p style={styles}>{children}</p>;
};

export default ErrorText;
