"use client";

import React, { useState, useEffect } from "react";

const RtlMode = () => {
  // Initialize state with value from localStorage or default to false
  const [isRTL, setIsRTL] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("rtl") === "true";
    }
    return false;
  });

  useEffect(() => {
    // Apply the direction on component mount and when isRTL changes
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // Persist to localStorage
    localStorage.setItem("rtl", isRTL.toString());
  }, [isRTL]);

  const toggleRTL = () => {
    setIsRTL((prev) => !prev);
  };

  return (
    <div className={`rtl-demo ${isRTL ? "rtl" : "ltr"}`}>
      <button type="button" onClick={toggleRTL}>
        {isRTL ? "Click to LTR" : "Click to RTL"}
      </button>
    </div>
  );
};

export default RtlMode;
