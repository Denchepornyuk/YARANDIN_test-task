import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectFilmsList = createSelector(
  rootSelector,
  ({ filmsData }) => filmsData
);

export const selectFilmsError = createSelector(
  rootSelector,
  ({ error }) => error,
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading,
);
