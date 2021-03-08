import React from "react";
import { Route } from "react-router-dom";
import FilmPage from "./films/FilmPage";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={FilmPage} />
    </div>
  );
};

export default App;
