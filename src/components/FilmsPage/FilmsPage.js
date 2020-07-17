import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import './filmPage.scss';
import FilmCard from '../FilmCard/FilmCard';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';
import SortBlock from '../SortBlock/SortBlock';
import SearchBlock from '../SearchBlock/SearchBlock';
import ModalWindow from '../ModalWindow/ModalWindow';

const FilmsPage = ({
  films,
  error,
  isLoading,
  loadFilms,
}) => {
  useEffect(() => loadFilms(), []);

  const [sortValue, setSortValue] = useState('title');
  const [searchValue, setSearchValue] = useState('');
  const [selectMovie, setSelectMovie] = useState(null);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (selectMovie) {
    return (
      <ModalWindow
        movie={selectMovie}
        selectMovie={setSelectMovie}
      />
    );
  }

  const sortFilms = sortValue === 'episode_id'
    ? [...films].sort((a, b) => (a[sortValue] - b[sortValue]))
    : [...films].sort((a, b) => (a[sortValue].localeCompare(b[sortValue])));

  const searchFilms = sortFilms.filter(item => (
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  ));

  return (
    <div className="star-wars container">
      <h1 className="star-wars__title">
        Stars Wars Films
      </h1>
      <div className="star-wars__filters">
        <SearchBlock
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SortBlock
          setSortValue={setSortValue}
          sortValue={sortValue}
        />
      </div>
      <div className="star-wars__films">
        <FilmCard
          films={searchFilms}
          selectMovie={setSelectMovie}
        />
      </div>
    </div>
  );
};

FilmsPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  loadFilms: PropTypes.func.isRequired,
};

FilmsPage.defaultProps = {
  films: [],
  isLoading: false,
  error: null,
};

export default FilmsPage;
