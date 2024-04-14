/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Define the step function
    const step = () => {
      // Calculate how far to scroll in this step
      const scrollStep = window.pageYOffset / 20; // You can adjust the divisor to control the speed
      // If we're not already at the top of the page
      if (window.pageYOffset > 0) {
        // Scroll by the scrollStep amount
        window.scrollBy(0, -scrollStep);
        // Call the step function recursively
        window.requestAnimationFrame(step);
      }
    };

    // Start the scrolling process
    window.requestAnimationFrame(step);
  };

  return (
    <div
      className="back-to-top"
      style={{
        display: backToTop ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        backgroundColor: "rgba(0, 255, 132, 1)",
        color: "black",
        padding: "10px 20px",
        borderRadius: "5px",
        zIndex: 9999,
      }}
      onClick={scrollToTop}
    >
      On Top
    </div>
  );
}
