import { fetchGames, fetchVideos } from './api';

describe('<api>', () => {
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
