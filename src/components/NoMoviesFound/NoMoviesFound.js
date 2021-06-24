import React, { useContext } from "react";
import "./NoMoviesFound.scss";
import { ThemeContext } from "../Context";
import Pulse from "react-reveal/Pulse";

const NoMoviesFound = () => {
  const [isDarkMode] = useContext(ThemeContext);
  return (
    <div
      className={`no__movies ${
        isDarkMode ? "no__movies__dark" : "no__movies__light"
      }`}
    >
      <Pulse>
        <h1>NO MOVIES FOUND</h1>
        <p>Search another one . . .</p>
      </Pulse>
    </div>
  );
};

export default NoMoviesFound;
