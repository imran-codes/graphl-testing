import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders course title", () => {
  render(<App />);
  const title = screen.getByText(/Graphql Fetch and Testing/i);
  expect(title).toBeInTheDocument();
});
