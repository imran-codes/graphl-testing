import { cleanup, render, screen } from "@testing-library/react";
import FilmContainer from "./FilmContainer";
// eslint-disable-next-line jest/no-mocks-import
import { allFilmsData } from "../__mocks__/Allfilms";

describe("FilmContainer", () => {
  afterEach(() => {
    cleanup();
  });

  const props = {
    film: allFilmsData.allFilms.films[0],
  };

  render(<FilmContainer {...props} />);
  it("should render the correct information in the component", () => {
    expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
    expect(screen.getByText(/George Lucas/i)).toBeInTheDocument();
    expect(screen.getByText(/1977-05-25/i)).toBeInTheDocument();
    expect(screen.getByText(/Gary Kurtz/i)).toBeInTheDocument();
  });
});
