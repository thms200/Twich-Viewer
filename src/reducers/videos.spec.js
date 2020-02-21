import { addVideoById, addVideoAllIds, videos } from './videos';
import { fetchedVideos, byIdSortedVideos, allIdsSortedVideos } from '../constants/example';

const initialState = {
  byId: {},
  allIds: [],
  pagination: '',
};

const actionGetVideosEx = {
  type: 'GET_VIDEOS',
  videos: fetchedVideos,
  videosPagination: 'ekqje320xkkeekbns',
};

const actionGetVideosResult = {
  byId: byIdSortedVideos,
  allIds: allIdsSortedVideos,
  pagination: 'ekqje320xkkeekbns',
};

describe('<Videos Reducer>', () => {
  describe('<function addVideoById>', () => {
    it('should be sorted by video ID', () => {
      expect(addVideoById(fetchedVideos)).toEqual(byIdSortedVideos);
    });
  });

  describe('<function addVideoAllIds>', () => {
    it('should be sorted by only video ID in the order they came in', () => {
      expect(addVideoAllIds(fetchedVideos)).toEqual(allIdsSortedVideos);
    });
  });

  describe('<function videos>', () => {
    it('should be stored videos information if action is GET_VIDEOS', () => {
      expect(videos(initialState, actionGetVideosEx)).toEqual(actionGetVideosResult);
    });
  });
});
