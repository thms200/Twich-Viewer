import { addGameById, addGameAllIds, games } from './games';
import { fetchedGames, byIdSortedGames, allIdsSortedGames } from '../constants/example';

const initialState = {
  byId: {},
  allIds: [],
  pagination: '',
  selectedGame: '',
};

const actionGetGamesEx = {
  type: 'GET_GAMES',
  games: fetchedGames,
  gamesPagination: 'eakejkkx249592skek',
  selectedGame: fetchedGames[0].id,
};

const actionGetGamesResult = {
  byId: byIdSortedGames,
  allIds: allIdsSortedGames,
  pagination: 'eakejkkx249592skek',
  selectedGame: '21779',
};

const actionChangeGameEx = {
  type: 'CHANGE_GAME',
  selectedGame: '217723',
};

const actionChangeGamesResult = {
  byId: byIdSortedGames,
  allIds: allIdsSortedGames,
  pagination: 'eakejkkx249592skek',
  selectedGame: '217723',
};

describe('<Games Reducer>', () => {
  describe('<function addGameById>', () => {
    it('should be sorted by game ID', () => {
      expect(addGameById(fetchedGames)).toEqual(byIdSortedGames);
    });
  });

  describe('<function addGameAllIds>', () => {
    it('should be sorted by only game ID in the order they came in', () => {
      expect(addGameAllIds(fetchedGames)).toEqual(allIdsSortedGames);
    });
  });

  describe('<function games>', () => {
    it('should be stored games information if action is GET_GAMES', () => {
      expect(games(initialState, actionGetGamesEx)).toEqual(actionGetGamesResult);
    });

    it('should be change selectedGame of store state if action is CHANGE_GAME', () => {
      expect(games(actionGetGamesResult, actionChangeGameEx)).toEqual(actionChangeGamesResult);
    });
  });
});
