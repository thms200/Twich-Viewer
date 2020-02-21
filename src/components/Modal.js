import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../containers/AppContainer.module.css';
const cx = classNames.bind(styles);

export default function Modal({ activeFlag, children }) {
  return (
    <div className={cx({ nonVisible: !activeFlag, visible: activeFlag })}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  activeFlag: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};
