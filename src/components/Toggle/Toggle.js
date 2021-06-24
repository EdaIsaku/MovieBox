import "./Toggle.scss";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../Context";
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);

  useEffect(() => {
    let isDark = JSON.parse(localStorage.getItem("theme__"));
    setIsDarkMode(isDark);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("theme__", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeToggle
      className={`toggle__button ${isDarkMode ? "toggle__button__dark" : null}`}
      onChange={() => {
        setIsDarkMode(!isDarkMode);
      }}
      checked={isDarkMode}
      size={60}
    />
  );
};

export default Toggle;
