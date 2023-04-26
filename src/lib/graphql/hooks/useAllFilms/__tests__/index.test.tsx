import { cleanup, waitFor } from "@testing-library/react";
// eslint-disable-next-line jest/no-mocks-import
import {
  allFilmsData,
  erroredAllFilmsMock,
  getAllFilmsWrapper,
  successfulAllFilmsMock,
} from "../../../../../__mocks__/Allfilms";
import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";

describe("useAllFilms Hook when successful", () => {
  afterEach(() => {
    cleanup();
  });
  const { result } = getAllFilmsWrapper(successfulAllFilmsMock);
  it("should be defined and then return correct data", async () => {
    expect(result).toBeDefined();
    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: undefined,
        data: allFilmsData,
      });
    });
  });
});

describe("useAllFilms Hook when it errors", () => {
  afterEach(() => {
    cleanup();
  });
  const { result } = getAllFilmsWrapper(erroredAllFilmsMock);

  it("should be defined and then return error", async () => {
    expect(result).toBeDefined();
    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: new ApolloError({
          graphQLErrors: [new GraphQLError("Oops the fetch was unsuccessful!")],
        }),
        data: undefined,
      });
    });
  });
});
