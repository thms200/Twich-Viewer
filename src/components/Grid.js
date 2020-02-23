import React from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';
import styles from '../containers/AppContainer.module.css';
import { IconTitle, IconTwich } from '../constants/icon';

export default function Grid({ areaInfoList, cellInfo, onCellClick }) {
  const {
    IMAGE_TYPE,
    IMAGE_SPLIT,
    IMAGE_SIZE,
    NAME_LENGTH_LIMIT,
    NAME,
    GRID_STYLE,
    IMAGE_STYLE,
    NAME_STYLE 
  } = cellInfo;
  const isVideoGrid = IMAGE_TYPE === 'thumbnail_url';

  return (
    <ul className={GRID_STYLE}>
      {areaInfoList.map((gridCell) => {
        const imageUrl = gridCell[IMAGE_TYPE].split(IMAGE_SPLIT);
        const imageExtention = imageUrl[2].split('.')[1];
        const imageSrc = `${imageUrl[0]}${IMAGE_SIZE}${imageExtention}`;
        const name = gridCell[NAME].length < NAME_LENGTH_LIMIT
          ? gridCell[NAME]
          : gridCell[NAME].slice(0, NAME_LENGTH_LIMIT) + '..';
        const cellRow_Name = isVideoGrid 
          ? <div className={NAME_STYLE}>
              <IconTitle size={18} />&ensp;{name}
            </div>
          : <div className={NAME_STYLE}>{name}</div>;
        const cellRow_User = isVideoGrid
          ? <div className={styles.videoUser}>
              <IconTwich size={18} />&ensp;
              {gridCell.user_name}
            </div>
          : '';
        const createAt = isVideoGrid
          ? gridCell.created_at && gridCell.created_at.slice(0, 10)
          : '';
        const cellRow_info = isVideoGrid
          ? <div className={styles.videoInformation}>
              {createAt}&ensp;
              View: {gridCell.view_count},&ensp;
              {gridCell.language},&ensp;
              {gridCell.viewable},&ensp;
              {gridCell.duration}
            </div>
          : '';
        return (
          <GridCell
            key={gridCell.id}
            id={gridCell.id}
            onCellClick={onCellClick}
          >
            <div className={IMAGE_STYLE}>
              <img 
                src={imageSrc}
                alt={name}
              />
            </div>
            {cellRow_Name}
            {cellRow_User}
            {cellRow_info}
          </GridCell>
        );
      })}
    </ul>
  )
}

Grid.propTypes = {
  areaInfoList: PropTypes.array.isRequired,
  cellInfo: PropTypes.object.isRequired,
  onCellClick: PropTypes.func.isRequired,
};
