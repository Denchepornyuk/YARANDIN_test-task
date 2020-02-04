const SW_API = 'https://swapi.co/api/films/';

export const getSWFromServer = async() => (
  fetch(SW_API).then(response => response.json())
);
