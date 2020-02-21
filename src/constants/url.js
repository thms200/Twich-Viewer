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
  RECEIVED: 'Request failed with status code 429',
  ALERT: 'You have made too many requests. Please try again later.',
};
