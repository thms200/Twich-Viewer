import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onButtonClick, buttonText, buttonStyle }) {
  return (
    <button 
      className={buttonStyle}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  buttonStyle: PropTypes.string.isRequired,
};
