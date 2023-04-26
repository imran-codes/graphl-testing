import { gql } from "@apollo/client";

const GET_ALL_FILMS = gql`
  query AllFilms {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        producers
      }
    }
  }
`;

export { GET_ALL_FILMS };
