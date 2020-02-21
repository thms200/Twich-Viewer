import { resortByIdOrder, fetchGames, fetchVideos } from './api';
import { 
  byIdSortedGames, 
  allIdsSortedGames, 
  fetchedGames as gamesResult 
} from '../constants/example';

describe('<api>', () => {
  describe('<function resortByIdOrder>', () => {
    it('should be resorted by id in the form of an array.', () => {
      expect(resortByIdOrder(byIdSortedGames, allIdsSortedGames)).toEqual(gamesResult);
    });
  });

  describe('<function fetchGames/fetchVideos>', () => {
    it('should fetch game data', async () => {
      const data = await fetchGames();
      expect(data.config.headers['Client-ID']).toEqual('6ltx4kklj2tidpzbz3lpm2yi37ptwp');
    });

    it('should fetch video data', async () => {
      const data = await fetchVideos(22779);
      expect(data.config.headers['Client-ID']).toEqual('6ltx4kklj2tidpzbz3lpm2yi37ptwp');
    });
  });
});
