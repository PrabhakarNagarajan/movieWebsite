import React from "react";
import "./movieContent.css";
// import movieTitle from "../images/transformer-title.png";
// import { Button } from "bootstrap";
import MainButton from "./Button";

const MovieContent = ({ movie }) => {
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
      <img src={movie.titleImg} alt="Movie title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <MainButton
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <MainButton
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="MyList"
        />
      </div>
    </div>
  );
};

export default MovieContent;
