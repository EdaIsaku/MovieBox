import React, { useContext, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { ThemeContext } from "../Context";
import "./ScrollArrow.scss";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isDarkMode] = useContext(ThemeContext);

  const checkScrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset < 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollToTop);

  return (
    <FaArrowCircleUp
      onClick={scrollTop}
      className="icon__scroll-Top"
      color={`${isDarkMode ? "white" : "black"}`}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};
export default ScrollArrow;
