import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '../components/Grid';
import Button from '../components/Button';
import styles from './AppContainer.module.css';
import { loadPreviousGames, loadNextGames, loadSelectedGame } from '../actions';
import { resortByIdOrder } from '../utils/api';
import { GAME_CELL } from '../constants/gridCell';

function GameContainer({ gamesByid, gamesAllIds, onPreviousClick, onNextClick, onGameClick }) {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    setGameList(resortByIdOrder(gamesByid, gamesAllIds));
  }, [gamesByid]);

  return (
    <article className={styles.wrapper}>
      <Button
        onButtonClicked={onPreviousClick}
        buttonInput={'<'}
        buttonStyle={styles.moveButton}
      />
      <Grid
        areaInfo={gameList}
        cellInfo={GAME_CELL}
        onCellClick={onGameClick}
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
    gamesByid: state.games.byId,
    gamesAllIds: state.games.allIds,
  };
};

export default connect(
  mapStateToProps,
  {
    onPreviousClick: loadPreviousGames,
    onNextClick: loadNextGames,
    onGameClick: loadSelectedGame,
  }
)(GameContainer); 

GameContainer.propTypes = {
  gamesByid: PropTypes.object.isRequired,
  gamesAllIds: PropTypes.array.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onGameClick: PropTypes.func.isRequired,
};
