import "./FilmCard.scss";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context";

const FilmCard = ({ src, title, year, info }) => {
  const [hovered, setHovered] = useState(false);
  const [isdarkMode] = useContext(ThemeContext);

  return (
    <div
      className={`card ${hovered ? "card__hovered" : null} ${
        isdarkMode ? "card__dark" : "card__light"
      } `}
    >
      <div
        className="card__figure"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img className="card__image" src={src} alt="poster"></img>
      </div>
      <div className="card__info">
        <h2
          className={`card__info__title ${
            isdarkMode ? "card__info__title__dark" : null
          }`}
        >
          {title}
        </h2>
        <h6
          className={`card__info__title ${
            isdarkMode ? "card__info__title__dark" : null
          }`}
        >
          ({year})
        </h6>
        <p className="card__info__type">{info} </p>
      </div>
    </div>
  );
};

export default FilmCard;
