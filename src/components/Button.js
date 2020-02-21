import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onButtonClicked, buttonInput, buttonStyle }) {
  return (
    <button 
      className={buttonStyle}
      onClick={onButtonClicked}
    >
      {buttonInput}
    </button>
  );
}

Button.propTypes = {
  onButtonClicked: PropTypes.func.isRequired,
  buttonInput: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  buttonStyle: PropTypes.string.isRequired,
};
