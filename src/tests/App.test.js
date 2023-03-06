import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { useContext } from "react";
import App from "../App";
import { CardComponent } from "../components";
import { DataContext } from "../context/DataContext";

beforeEach(() => {
  render(<App />);
});
test("renders options component ", () => {
  expect(screen.getByText("Filter")).toBeInTheDocument();
  expect(screen.getByText("Category")).toBeInTheDocument();
  expect(screen.getByText("Difficulty")).toBeInTheDocument();
  expect(screen.getByText("Type")).toBeInTheDocument();
});

test("renders navbar component", () => {
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Favourites")).toBeInTheDocument();
});

test("renders the questions card component", () => {
  expect(screen.getByText("Ready to be tested?")).toBeInTheDocument();
});

test("can navigate to favourites page", () => {
  fireEvent.click(screen.getByText("Favourites"));
  expect(screen.getByText("Favourites page")).toBeInTheDocument();
});
