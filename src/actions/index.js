import * as types from '../constants/actionTypes';
import {
  fetchVideos,
  fetchNextGames,
  fetchPreviousGames,
  fetchNextVideos,
  fetchPreviousVideos
} from '../utils/api';
import { ERROR_MESSAGE } from '../constants/url';

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

function dispatchVideo(dispatch, fectchVideos, errorMessage){
  if (fectchVideos && fectchVideos.data.data.length > 0) {
    const videos = fectchVideos.data.data;
    const videosPagination = fectchVideos.data.pagination.cursor;
    dispatch(getVideos(videos, videosPagination));
  } else if (errorMessage) {
    alert(errorMessage);
  }
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
              dispatch(getGames(games, gamesPagination, selectedGame));
              dispatchVideo(dispatch, videoList, ERROR_MESSAGE.ALERT.CHOICE_ZEROVIDEO);
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
              dispatch(getGames(games, gamesPagination, selectedGame));
              dispatchVideo(dispatch, videoList, ERROR_MESSAGE.ALERT.CHOICE_ZEROVIDEO);
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
        dispatchVideo(dispatch, videoList, ERROR_MESSAGE.ALERT.LESS_DATA);
      });
  };
}

export function loadPreviousVideos() {
  return function(dispatch, getState) {
    const pagination = getState().videos.pagination;
    const selectedGame = getState().games.selectedGame;
    fetchPreviousVideos(selectedGame, pagination)
      .then((videoList) => {
        dispatchVideo(dispatch, videoList);
      });
  };
}

export function loadSelectedGame(selectedGame) {
  return function(dispatch) {
    dispatch(changeSelectedGame(selectedGame));
    fetchVideos(selectedGame)
      .then((videoList) => {
        dispatchVideo(dispatch, videoList, ERROR_MESSAGE.ALERT.CHOICE_ZEROVIDEO);
      });
  };
}

export function changeSelectedGame(selectedGame) {
  return {
    type: types.CHANGE_GAME,
    selectedGame,
  };
}
