import React from "react";
import { FilmsType } from "../types";

interface FilmContainerProps {
  film: FilmsType;
}

const FilmContainer: React.FC<FilmContainerProps> = ({ film }) => {
  return (
    <>
      <h3>Title: {film?.title}</h3>
      <p>Release: {film?.releaseDate}</p>
      <p>Director: {film?.director}</p>
      <p>Producers: {film?.producers[0]}</p>
    </>
  );
};

export default FilmContainer;
