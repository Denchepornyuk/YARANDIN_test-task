const FILMS_URL = 'https://swapi.dev/api/films/';

export const getFilmsFromServer = async() => (
  fetch(FILMS_URL).then(response => response.json())
);
