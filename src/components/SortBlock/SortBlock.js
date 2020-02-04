import React from 'react';
import { PropTypes } from 'prop-types';
import './sortBlock.scss';

const SortBlock = ({ sortValue, setSortValue }) => {
  const sortColumns = {
    title: 'Name',
    episode_id: 'Episode',
    release_date: 'Date',
  };

  return (
    <div className="sort">
      <p className="sort__text">
        Sort by:
      </p>
      {Object.keys(sortColumns).map(item => (
        <React.Fragment key={item}>
          <input
            type="radio"
            name="sort"
            className="sort__input"
            id={`sort-${item}`}
            checked={item === sortValue}
            onChange={() => setSortValue(item)}
          />
          <label
            htmlFor={`sort-${item}`}
            className="sort__label"
          >
            {sortColumns[item]}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

SortBlock.propTypes = {
  sortValue: PropTypes.string,
  setSortValue: PropTypes.func.isRequired,
};

SortBlock.defaultProps = {
  sortValue: 'title',
};

export default SortBlock;
