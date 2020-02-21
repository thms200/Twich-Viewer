import { GET_VIDEOS } from '../constants/actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  pagination: '',
};

export function addVideoById(videoList) {
  const result = {};
  videoList.forEach((video) => {
    result[video.id]= video;
  });
  return result;
}

export function addVideoAllIds(videoList) {
  const result = videoList.map((video) => {
    return video.id;
  });
  return result;
}

export function videos(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        byId: addVideoById(action.videos),
        allIds: addVideoAllIds(action.videos),
        pagination: action.videosPagination,
      };
    default:
      return state;
  }
}
