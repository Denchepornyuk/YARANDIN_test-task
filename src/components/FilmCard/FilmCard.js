import React from 'react';
import { PropTypes } from 'prop-types';
import './filmCard.scss';

const FilmCard = ({ films }) => (
  films.map(movie => (
    <div className="movie__card">
      <h2>{movie.title}</h2>
      <p>{`Episode ${movie.episode_id}`}</p>
      <p>{`Release ${movie.release_date}`}</p>
      <button
        type="button"
        className="button"
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
