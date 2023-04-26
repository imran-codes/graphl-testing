import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react";
import useAllFilms from "../lib/graphql/hooks/useAllFilms";
import { GET_ALL_FILMS } from "../lib/graphql/queries";
import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";

export const allFilmsData = {
  allFilms: {
    films: [
      {
        id: "ZmlsbXM6MQ==",
        title: "A New Hope",
        director: "George Lucas",
        releaseDate: "1977-05-25",
        producers: ["Gary Kurtz"],
      },
    ],
  },
};

export const successfulAllFilmsMock: MockedResponse[] = [
  {
    request: {
      query: GET_ALL_FILMS,
    },
    result: {
      data: allFilmsData,
    },
  },
];

export const erroredAllFilmsMock: MockedResponse[] = [
  {
    request: {
      query: GET_ALL_FILMS,
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError("Oops the fetch was unsuccessful!")],
    }),
  },
];

export function getAllFilmsWrapper(mockData: MockedResponse[] = []) {
  const wrapper = ({ children }: React.PropsWithChildren) => (
    <MockedProvider mocks={mockData} addTypename={false}>
      {children}
    </MockedProvider>
  );
  const { result } = renderHook(() => useAllFilms(), { wrapper });
  return {
    result,
  };
}
