import React from "react";
import PropTypes from "prop-types";

const FilmList = ({ films }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {films.map((film) => {
        return (
          <tr key={film.id}>
            <td>{film.title}</td>
            <td>{film.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList;
