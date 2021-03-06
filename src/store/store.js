import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACTIONS_TYPES } from './actions';

const initialState = {
  filmsData: [],
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_FILMS:
      return {
        ...state,
        error: null,
        filmsData: action.films.results,
      };

    case ACTIONS_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case ACTIONS_TYPES.GET_FILMS_ERROR:
      return {
        ...state,
        error: action.error,
        filmsData: [],
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
