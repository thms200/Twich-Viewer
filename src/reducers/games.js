import { GET_GAMES, CHANGE_GAME } from '../constants/actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  pagination: '',
  selectedGame: '',
};

export function addGameById(gameList) {
  const result = {};
  gameList.forEach((game) => {
    result[game.id]= game;
  });
  return result;
}

export function addGameAllIds(gameList) {
  const result = gameList.map((game) => {
    return game.id;
  });
  return result;
}

export function games(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        byId: addGameById(action.games),
        allIds: addGameAllIds(action.games),
        pagination: action.gamesPagination,
        selectedGame: action.selectedGame,
      };
    case CHANGE_GAME:
      return {
        ...state,
        selectedGame: action.selectedGame,
      };
    default:
      return state;
  }
}
