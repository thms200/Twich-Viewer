import React from 'react';
import PropTypes from 'prop-types';
import styles from '../containers/AppContainer.module.css';

export default function GridCell({ id, onCellClick, children }) {
  return (
    <li
      id={id}
      className={styles.contentsWrapper} 
      onClick={(e) => {
        onCellClick(e.currentTarget.id);
      }}
    >
      {children}
    </li>
  )
}

GridCell.propTypes = {
  id: PropTypes.string.isRequired,
  onCellClick: PropTypes.func.isRequired,
  children: PropTypes.array,
};
