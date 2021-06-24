import "./Header.scss";
import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import Toggle from "../Toggle/Toggle";
import { ThemeContext } from "../Context";

const Header = ({ handleSearch, handleCategoryClick }) => {
  const [isDarkMode] = useContext(ThemeContext);

  return (
    <div className={`header ${isDarkMode ? "header__dark" : "header__light"}`}>
      <div className="header__link">
        <p
          className={`header__link__text ${
            isDarkMode ? "header__link__text__dark" : null
          }`}
          onClick={handleCategoryClick}
        >
          HOME
        </p>
        <p
          className={`header__link__text ${
            isDarkMode ? "header__link__text__dark" : ""
          }`}
          onClick={handleCategoryClick}
        >
          MOVIES
        </p>
        <p
          className={`header__link__text ${
            isDarkMode ? "header__link__text__dark" : null
          }`}
          onClick={handleCategoryClick}
        >
          SERIALS
        </p>
        <p
          className={`header__link__text ${
            isDarkMode ? "header__link__text__dark" : null
          }`}
          onClick={handleCategoryClick}
        >
          KIDS
        </p>
      </div>
      <div className="header__search">
        <input
          className={`header__search__input ${
            isDarkMode ? "header__search__input__dark" : null
          }`}
          type="text"
          placeholder="Search your favourite movie . . ."
          onChange={handleSearch}
        />
        <button
          className={`header__search__icon  ${
            isDarkMode ? "header__search__icon__dark" : null
          }`}
          type="submit"
        >
          <FaSearch />
        </button>
      </div>
      <span className="header__toggle">
        <Toggle />
      </span>
    </div>
  );
};

export default Header;
