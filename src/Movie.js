import React from "react";

const Movie = ({ img, title, year }) => {
  return (
    <div className="movie">
      <img src={img} alt="" />
      <p>{title}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Movie;
