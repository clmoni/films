import * as types from "./actionTypes";
const baseUrl = process.env.API_URL + "/films/";

export const loadFilmsSuccess = (films) => {
  return { type: types.LOAD_FILMS_SUCCESS, films };
};

export function loadFilms() {
  return async function (dispatch) {
    try {
      const films = await getFilms();
      dispatch(loadFilmsSuccess(films));
    } catch (error) {
      throw error;
    }
  };
}

export async function getFilms() {
  try {
    const response = await fetch(baseUrl);

    if (response.ok) {
      return response.json();
    }

    if (response.status === 400) {
      // bad request
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  } catch (error) {
    throw error;
  }
}
