import React from "react";
import { cleanup, render } from "react-testing-library";
import FilmList from "./FilmList";

describe("Films", () => {
  afterEach(cleanup);

  function renderFilmList(args) {
    let defaultProps = {
      films: [],
      loadFilms: () => {},
    };

    const props = { ...defaultProps, ...args };
    return render(<FilmList {...props} />);
  }

  it("should render table column headings", () => {
    const { getByText } = renderFilmList();
    getByText("Title");
    getByText("Category");
  });

  it("should render list of films", () => {
    const { getByText } = renderFilmList({
      films: [{ id: 1, title: "Iron Man", category: "Action" }],
    });
    getByText("Iron Man");
  });
});
