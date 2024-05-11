"use client";
import { useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(false);
  return (
    <div className="preloader" style={{ display: load ? "flex" : "none" }}>
      <div className="custom-loader" />
    </div>
  );
};
export default Preloader;
