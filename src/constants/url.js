export const URL_INFO = {
  GAME: 'https://api.twitch.tv/helix/games/top',
  VIDEO_BYGAME: 'https://api.twitch.tv/helix/videos?game_id',
  LIMIT_10: 'first=10',
  LIMIT_20: 'first=20',
  SORT_VIEWS: 'sort=views',
  CLIENT_ID: '6ltx4kklj2tidpzbz3lpm2yi37ptwp',
};

export const URL_OPTION = {
  params: {
    language: 'en',
    type: 'highlight',
  }
};

export const ERROR_MESSAGE = {
  RECEIVED: {
    MANY_REQUEST: 'Request failed with status code 429',
    LESS_DATA: 'Request failed with status code 400',
  },
  ALERT: {
    MANY_REQUEST: 'You have made too many requests. Please try again later.',
    LESS_DATA: 'Sorry, no more video',
    CHOICE_ZEROVIDEO: 'Sorry. The game you choose has no video. Choice another Game :)',
  },
};
