import * as types from '../constants/actionTypes';
import {
  fetchVideos,
  fetchNextGames,
  fetchPreviousGames,
  fetchNextVideos,
  fetchPreviousVideos
} from '../utils/api';

export function getGames(games, gamesPagination, selectedGame) {
  return {
    type: types.GET_GAMES,
    games,
    gamesPagination,
    selectedGame,
  };
}

export function getVideos(videos, videosPagination) {
  return {
    type: types.GET_VIDEOS,
    videos,
    videosPagination,
  };
}

export function loadNextGames() {
  return function(dispatch, getState) {
    const pagination = getState().games.pagination;
    fetchNextGames(pagination)
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
  };
}

export function loadPreviousGames() {
  return function(dispatch, getState) {
    const pagination = getState().games.pagination;
    fetchPreviousGames(pagination)
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
  };
}

export function loadNextVideos() {
  return function(dispatch, getState) {
    const pagination = getState().videos.pagination;
    const selectedGame = getState().games.selectedGame;
    fetchNextVideos(selectedGame, pagination)
      .then((videoList) => {
        if(videoList) {
          const videos = videoList.data.data;
          const videosPagination = videoList.data.pagination.cursor;
          dispatch(getVideos(videos, videosPagination));
        }
      });
  };
}

export function loadPreviousVideos() {
  return function(dispatch, getState) {
    const pagination = getState().videos.pagination;
    const selectedGame = getState().games.selectedGame;
    fetchPreviousVideos(selectedGame, pagination)
      .then((videoList) => {
        if(videoList) {
          const videos = videoList.data.data;
          const videosPagination = videoList.data.pagination.cursor;
          dispatch(getVideos(videos, videosPagination));
        }
      });
  };
}

export function loadSelectedGame(selectedGame) {
  return function(dispatch) {
    dispatch(changeSelectedGame(selectedGame));
    fetchVideos(selectedGame)
      .then((videoList) => {
        if(videoList) {
          const videos = videoList.data.data;
          const videosPagination = videoList.data.pagination.cursor;
          dispatch(getVideos(videos, videosPagination));
        }
      });
  };
}

export function changeSelectedGame(selectedGame) {
  return {
    type: types.CHANGE_GAME,
    selectedGame,
  };
}
