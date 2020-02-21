import axios from 'axios';
import { URL_INFO, URL_OPTION, ERROR_MESSAGE } from '../constants/url';

axios.defaults.headers = {
  'Client-ID': URL_INFO.CLIENT_ID,
};

function errorAlert() {
  alert(ERROR_MESSAGE.ALERT);
}

export async function fetchGames() {
  try {
    return await axios.get(`${URL_INFO.GAME}?${URL_INFO.LIMIT_10}`);
  } catch (error) {
    if (error.message === ERROR_MESSAGE.RECEIVED) {
      errorAlert();
    }
  }
}

export async function fetchVideos(gameID) {
  try {
    return await axios.get(`${URL_INFO.VIDEO_BYGAME}=${gameID}&${URL_INFO.SORT_VIEWS}&${URL_INFO.LIMIT_20}`, URL_OPTION);
  } catch (error) {
    if (error.message === ERROR_MESSAGE.RECEIVED) {
      errorAlert();
    }
  }
}

export async function fetchNextGames(pagination) {
  try {
    return await axios.get(`${URL_INFO.GAME}?after=${pagination}&${URL_INFO.LIMIT_10}`);
  } catch (error) {
    if (error.message === ERROR_MESSAGE.RECEIVED) {
      errorAlert();
    }
  }
}

export async function fetchPreviousGames(pagination) {
  try {
    return await axios.get(`${URL_INFO.GAME}?before=${pagination}&${URL_INFO.LIMIT_10}`);
  } catch (error) {
    if (error.message === ERROR_MESSAGE.RECEIVED) {
      errorAlert();
    }
  }
}

export async function fetchNextVideos(gameID, pagination) {
  try {
    return await axios.get(`${URL_INFO.VIDEO_BYGAME}=${gameID}&after=${pagination}&${URL_INFO.SORT_VIEWS}&${URL_INFO.LIMIT_20}`, URL_OPTION);
  } catch (error) {
    if (error.message === ERROR_MESSAGE.RECEIVED) {
      errorAlert();
    }
  }
}


export async function fetchPreviousVideos(gameID, pagination) {
  try {
    return await axios.get(`${URL_INFO.VIDEO_BYGAME}=${gameID}&before=${pagination}&${URL_INFO.SORT_VIEWS}&${URL_INFO.LIMIT_20}`, URL_OPTION);
  } catch (error) {
    if (error.message === ERROR_MESSAGE.RECEIVED) {
      errorAlert();
    }
  }
}

export function resortByIdOrder(byId, allIds) {
  const result = allIds.map((id)=> {
    return byId[id];
  })
  return result;
}
