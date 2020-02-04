import React from 'react';
import PropTypes from 'prop-types';
import './errorPage.scss';

const ErrorPage = ({ message }) => (
  <div className="error container">
    <p className="error__text">
      {message}
    </p>

    <a href="/" className="button error__link">
      Go to Home
    </a>
  </div>
);

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: 'Sorry, something went wrong!!!',
};

export default ErrorPage;
