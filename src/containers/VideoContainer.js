import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '../components/Grid';
import Modal from '../components/Modal';
import ModalChild from '../components/ModalChild';
import Button from '../components/Button';
import styles from './AppContainer.module.css';
import { loadPreviousVideos, loadNextVideos } from '../actions';
import { resortByIdOrder } from '../utils/api';
import { VIDEO_CELL } from '../constants/gridCell';

function VideoContainer({ videosByid, videosAllIds, onPreviousClick, onNextClick }) {
  const [modalActiveFlag, setModalActiveFlag] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setVideoList(resortByIdOrder(videosByid, videosAllIds));
  }, [videosByid]);

  function onVideoClick(selectedId) {
    setModalActiveFlag(true);
    const videoList = videosByid[selectedId];
    const selectedInfomation = {};
    selectedInfomation.id = videoList.id;
    selectedInfomation.user = videoList.user_name;
    selectedInfomation.title = videoList.title;
    selectedInfomation.createAt = videoList.created_at.slice(0, 10);
    selectedInfomation.url = videoList.url;
    selectedInfomation.thumbnail = videoList.thumbnail_url;
    selectedInfomation.viewable = videoList.viewable;
    selectedInfomation.viewCount = videoList.view_count;
    selectedInfomation.language = videoList.language;
    selectedInfomation.duration = videoList.duration;
    setSelectedVideo(selectedInfomation);
  }
  function onVideoCloseClick() {
    setModalActiveFlag(false);
  }
  
  return (
    <article className={`${styles.wrapper} ${styles.videosBox}`}>
      <Modal activeFlag={modalActiveFlag}>
        <ModalChild modalInfo={selectedVideo} onCloseModal={onVideoCloseClick} />
      </Modal>
      <Button 
        onButtonClicked={onPreviousClick}
        buttonInput={'<'}
        buttonStyle={styles.moveButton}
      />
      <Grid
        areaInfo={videoList}
        cellInfo={VIDEO_CELL}
        onCellClick={onVideoClick}
      />
      <Button
        onButtonClicked={onNextClick}
        buttonInput={'>'}
        buttonStyle={styles.moveButton}
      />
    </article>
  );
}

const mapStateToProps = state => {
  return {
    videosByid: state.videos.byId,
    videosAllIds: state.videos.allIds,
  };
};

export default connect(
  mapStateToProps,
  { onPreviousClick: loadPreviousVideos, onNextClick: loadNextVideos }
)(VideoContainer); 

VideoContainer.propTypes = {
  videosByid: PropTypes.object.isRequired,
  videosAllIds: PropTypes.array.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};
