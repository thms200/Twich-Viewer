import styles from '../containers/AppContainer.module.css';

export const GAME_CELL = {
  IMAGE_TYPE: 'box_art_url',
  IMAGE_SPLIT: '{',
  IMAGE_SIZE: '140x200.',
  NAME_LENGTH_LIMIT: 15,
  NAME: 'name',
  GRID_STYLE: styles.wrapper,
  IMAGE_STYLE: styles.gameImage,
  NAME_STYLE: styles.gameName,
};

export const VIDEO_CELL = {
  IMAGE_TYPE: 'thumbnail_url',
  IMAGE_SPLIT: '%',
  IMAGE_SIZE: '250x140.',
  NAME_LENGTH_LIMIT: 25,
  NAME: 'title',
  GRID_STYLE: styles.videoWrapper,
  IMAGE_STYLE: styles.videoImage,
  NAME_STYLE: styles.videoName,
};
