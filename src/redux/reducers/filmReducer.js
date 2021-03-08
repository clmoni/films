import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function filmReducer(state = initialState.films, action) {
  switch (action.type) {
    case types.LOAD_FILMS_SUCCESS:
      return action.films;
    default:
      return state;
  }
}
