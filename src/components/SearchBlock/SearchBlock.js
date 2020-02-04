import React from 'react';
import { PropTypes } from 'prop-types';
import './searchBlock.scss';

const SearchBlock = ({ searchValue, setSearchValue }) => (
  <div className="search">
    <p className="search__text">
      Search:
    </p>
    <input
      type="text"
      name="search"
      className="search__input"
      placeholder="Search by name"
      autoComplete="off"
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
    />
  </div>
);

SearchBlock.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
};

SearchBlock.defaultProps = {
  searchValue: '',
};

export default SearchBlock;
