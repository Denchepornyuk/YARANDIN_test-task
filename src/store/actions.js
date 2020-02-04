import { getFilmsFromServer } from '../api/swapi';

export const ACTIONS_TYPES = {
  GET_FILMS: 'GET_FILMS',
  GET_FILMS_ERROR: 'GET_FILMS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const getFilms = films => ({
  type: ACTIONS_TYPES.GET_FILMS,
  films,
});

const getFilmsError = error => ({
  type: ACTIONS_TYPES.GET_FILMS_ERROR,
  error,
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

export const loadFilms = () => (dispatch) => {
  dispatch(startLoading());

  getFilmsFromServer()
    .then(data => dispatch(getFilms(data)))
    .catch(error => dispatch(getFilmsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
