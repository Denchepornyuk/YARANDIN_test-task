import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import './modalWindow.scss';
import AddData from '../AddData/AddData';

const ModalWindow = ({ movie, selectMovie }) => {
  const [characters, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [error, setError] = useState(null);

  const getDataFromServer = async url => (
    fetch(url)
      .then(response => response.json())
      .catch(data => setError(data))
      .then(data => data)
  );

  const additionalData = {
    characters: setPeople,
    planets: setPlanets,
    starships: setStarships,
  };

  useEffect(() => {
    Object.keys(additionalData).map(item => (
      movie[item].map(url => (
        getDataFromServer(url)
          .then(data => additionalData[item](prev => ([...prev, data])))
      ))
    ));
  }, []);

  return (
    <div className="window container">
      <h2 className="window__title">{movie.title}</h2>
      <p className="window__episode">
        {`Episode ${movie.episode_id}`}
      </p>
      <p className="window__release">
        {`Release ${movie.release_date}`}
      </p>

      <p className="window__description">
        {movie.opening_crawl}
      </p>

      <button
        type="button"
        className="window__close"
        onClick={() => selectMovie(null)}
      >
        X
      </button>

      {error
        ? <p>{error}</p>
        : ''
      }

      {!characters.length || !planets.length || !starships.length
        ? <p>Loading...</p>
        : (
          <AddData
            characters={characters}
            planets={planets}
            starships={starships}
          />
        )
      }

    </div>
  );
};

ModalWindow.propTypes = {
  movie: PropTypes.objectOf.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default ModalWindow;
