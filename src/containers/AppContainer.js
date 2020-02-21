import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameContainer from './GameContainer';
import VideoContainer from './VideoContainer';
import styles from './AppContainer.module.css';
import { getGames, getVideos } from '../actions';
import { fetchGames, fetchVideos } from '../utils/api';
import { IconTwich } from '../constants/icon';

function AppContainer({ onLoad, gamesAllIds }) {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const hasGames = (gamesAllIds && gamesAllIds.length) ? true : false;

  return (
    <Fragment>
      <header className={styles.wrapper}>
        <IconTwich size={25} className={styles.title} />
        <h2 className={styles.title} onClick={onLoad}>Twitch</h2>
      </header>
      <hr />
      {!hasGames 
        ? <h1>Loading</h1>
        : <section>
            <GameContainer />
            <hr />
            <VideoContainer />
          </section> 
      }
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    gamesAllIds: state.games.allIds,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      fetchGames()
        .then((gameList) => {
          if(gameList) {
            const games = gameList.data.data;
            const gamesPagination = gameList.data.pagination.cursor;
            const selectedGame = games[0].id;

            fetchVideos(selectedGame)
              .then((videoList) => {
                if(videoList) {
                  const videos = videoList.data.data;
                  const videosPagination = videoList.data.pagination.cursor;
                  dispatch(getGames(games, gamesPagination, selectedGame));
                  dispatch(getVideos(videos, videosPagination));  
                }
              });
          }
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer); 

AppContainer.propTypes = {
  onLoad: PropTypes.func.isRequired,
  gamesAllIds: PropTypes.array.isRequired,
};
