import React from 'react';
import { PropTypes } from 'prop-types';
import './filmCard.scss';

const FilmCard = ({ films, selectMovie }) => (
  films.map(movie => (
    <div className="movie__card" key={movie.episode_id}>
      <h2>{movie.title}</h2>
      <p>{`Episode ${movie.episode_id}`}</p>
      <p>{`Release ${movie.release_date}`}</p>
      <button
        type="button"
        className="button movie__button"
        onClick={() => selectMovie(movie)}
      >
        Show more
      </button>
    </div>
  ))
);

FilmCard.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})),
};

FilmCard.defaultProps = {
  films: [],
};

export default FilmCard;
