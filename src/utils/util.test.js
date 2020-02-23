import { resortByIdOrder } from './util';
import { 
  byIdSortedGames, 
  allIdsSortedGames, 
  fetchedGames as gamesResult 
} from '../constants/example';

describe('<util>', () => {
  describe('<function resortByIdOrder>', () => {
    it('should be resorted by id in the form of an array.', () => {
      expect(resortByIdOrder(byIdSortedGames, allIdsSortedGames)).toEqual(gamesResult);
    });
  });
});
