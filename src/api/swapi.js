const FILMS_URL = 'https://swapi.co/api/films/';

export const getFilmsFromServer = async() => (
  fetch(FILMS_URL).then(response => response.json())
);
