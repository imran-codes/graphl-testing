import React from "react";
import useAllFilms from "../lib/graphql/hooks/useAllFilms";
import FilmContainer from "../components/FilmContainer";
import { FilmsType } from "../types";

const Home: React.FC = () => {
  const { data, loading, error } = useAllFilms();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { allFilms } = data;

  return (
    <div>
      {allFilms?.films?.map((film: FilmsType) => (
        <FilmContainer key={film.id} film={film} />
      ))}
    </div>
  );
};

export default Home;
