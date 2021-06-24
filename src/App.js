import "./App.scss";
import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./components/Context";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./components/Header/Header";
import FilmCard from "./components/FilmCard/FilmCard";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import NoMoviesFound from "./components/NoMoviesFound/NoMoviesFound";

const apiKey = "1fc2495b";

const override = css`
  display: block;
  margin: 50px auto;
  width: 100%;
  text-align: center;
`;

function App() {
  const [isDarkMode] = useContext(ThemeContext);
  const [movies, setMovies] = useState([]);
  let [filteredMovies, setFilteredMovies] = useState(movies);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [searchStr, setSearchStr] = useState("mission");

  useEffect(() => {
    let url = `http://www.omdbapi.com/?s=${searchStr}&apikey=${apiKey}&page=`;
    fetchMovies(page, url);
    // eslint-disable-next-line
  }, [page, searchStr]);

  const fetchMovies = (page, url) => {
    fetch(`${url}${page}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Search) {
          setLoading(true);
          const filterMovies = res.Search.filter((el) => {
            return el.Poster !== "N/A";
          });
          setTimeout(() => {
            let results = movies.concat(filterMovies);
            setMovies(results);
            setFilteredMovies(results);
            setLoading(false);
          }, 1000);
        } else {
          setFilteredMovies("");
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      });
  };

  const increasePage = () => {
    setLoading(true);
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
    }, 1000);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value.length > 3) {
      setLoading(true);
      setMovies([]);
      setSearchStr(value);
    }
  };

  const handleCategoryClick = (e) => {
    if (e.target.innerHTML === "HOME") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFilteredMovies(movies);
    } else if (e.target.innerHTML === "MOVIES") {
      let filteredMovies = movies.filter((movie) => movie.Type === "movie");
      setFilteredMovies(filteredMovies);
    } else if (e.target.innerHTML === "SERIALS") {
      let filteredSerials = movies.filter((movie) => movie.Type === "series");
      setFilteredMovies(filteredSerials);
    }
  };

  return (
    <div className={`app ${isDarkMode ? "app  app__dark" : "app app__light"}`}>
      <div className="app__header">
        <Header
          handleSearch={handleSearch}
          handleCategoryClick={handleCategoryClick}
        />
      </div>
      <InfiniteScroll
        className="app__cards"
        dataLength={page}
        next={increasePage}
        hasMore={true}
        loader={
          <PropagateLoader
            color={"#8e0e00"}
            loading={loading}
            css={override}
            size={15}
          />
        }
        scrollThreshold={1}
      >
        {filteredMovies ? (
          filteredMovies.map((movie) => (
            <FilmCard
              src={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              info={movie.Type}
            />
          ))
        ) : (
          <NoMoviesFound />
        )}
      </InfiniteScroll>
      <ScrollArrow />
    </div>
  );
}

export default App;
