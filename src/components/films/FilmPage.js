import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadFilms } from "../../redux/actions/filmActions";
import PropTypes from "prop-types";
import FilmList from "./FilmList";

const FilmPage = (props) => {
  const { films, loadFilms } = props;

  useEffect(() => {
    if (films.length === 0) {
      try {
        loadFilms();
      } catch (error) {
        alert("could not load films" + error);
      }
    }
  }, []);

  return (
    <>
      <h2>Films</h2>
      <FilmList films={films} />
    </>
  );
};

FilmPage.propTypes = {
  films: PropTypes.array.isRequired,
  loadFilms: PropTypes.func.isRequired,
};

const mapDispatchToProp = {
  loadFilms,
};

const mapStateToProp = (state) => {
  return {
    films: state.films,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(FilmPage);
