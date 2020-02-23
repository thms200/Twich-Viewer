import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from '../containers/AppContainer.module.css';
import {
  IconTitle,
  IconTwich,
  IconCreatedAt,
  IconView,
  IconLaguage,
  IconDuration,
  IconViewable,
  IconClose
} from '../constants/icon';

export default function ModalChild({ modalInfo, onCloseModal }) {
  const buttonInput = <IconClose size={20} />;
  const hasVideo = !!modalInfo.id;
  const video 
    = <iframe
        title={modalInfo.modalVideo}
        src={`https://player.twitch.tv/?video=v${modalInfo.id}&autoplay=false`}
        height='400'
        width='510'
        frameBorder='0'
        scrolling='no'
        allowFullScreen={true}
      >
      </iframe>;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalVideoWrapper}>
        {hasVideo && video}
      </div>
      <ul className={styles.modalInfoWrapper}>
        <li><IconTitle size={20} />&ensp;Title: {modalInfo.title}</li>
        <li><IconTwich size={20} />&ensp;User: {modalInfo.user}</li>
        <li><IconCreatedAt size={20} />&ensp;Created at: {modalInfo.createAt}</li>
        <li><IconView size={20} />&ensp;View: {modalInfo.viewCount}</li>
        <li><IconLaguage size={20} />&ensp;Language: {modalInfo.language}</li>
        <li><IconDuration size={20} />&ensp;Duration: {modalInfo.duration}</li>
        <li><IconViewable size={20} />&ensp;Viewable: {modalInfo.viewable}</li>
      </ul>
      <Button
        onButtonClick={onCloseModal}
        buttonText={buttonInput}
        buttonStyle={styles.closeButton}
      />
    </div>
  );
}

ModalChild.propTypes = {
  modalInfo: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
