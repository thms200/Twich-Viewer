import axios from 'axios';
import { URL_INFO, URL_OPTION, ERROR_MESSAGE } from '../constants/url';

axios.defaults.headers = {
  'Client-ID': URL_INFO.CLIENT_ID,
};

function errorAlert(message) {
  if (message === ERROR_MESSAGE.RECEIVED.MANY_REQUEST) {
    alert(ERROR_MESSAGE.ALERT.MANY_REQUEST);
  } else if (message === ERROR_MESSAGE.RECEIVED.LESS_DATA) {
    alert(ERROR_MESSAGE.ALERT.LESS_DATA);
  }
}

export async function fetchGames() {
  try {
    return await axios.get(`${URL_INFO.GAME}?${URL_INFO.LIMIT_10}`);
  } catch (error) {
    errorAlert(error.message);
  }
}

export async function fetchVideos(gameID) {
  try {
    return await axios.get(`${URL_INFO.VIDEO_BYGAME}=${gameID}&${URL_INFO.SORT_VIEWS}&${URL_INFO.LIMIT_20}`, URL_OPTION);
  } catch (error) {
    errorAlert(error.message);
  }
}

export async function fetchNextGames(pagination) {
  try {
    return await axios.get(`${URL_INFO.GAME}?after=${pagination}&${URL_INFO.LIMIT_10}`);
  } catch (error) {

    errorAlert(error.message);
  }
}

export async function fetchPreviousGames(pagination) {
  try {
    return await axios.get(`${URL_INFO.GAME}?before=${pagination}&${URL_INFO.LIMIT_10}`);
  } catch (error) {
    errorAlert(error.message);
  }
}

export async function fetchNextVideos(gameID, pagination) {
  try {
    return await axios.get(`${URL_INFO.VIDEO_BYGAME}=${gameID}&after=${pagination}&${URL_INFO.SORT_VIEWS}&${URL_INFO.LIMIT_20}`, URL_OPTION);
  } catch (error) {
    errorAlert(error.message);
  }
}


export async function fetchPreviousVideos(gameID, pagination) {
  try {
    return await axios.get(`${URL_INFO.VIDEO_BYGAME}=${gameID}&before=${pagination}&${URL_INFO.SORT_VIEWS}&${URL_INFO.LIMIT_20}`, URL_OPTION);
  } catch (error) {
    errorAlert(error.message);
  }
}
