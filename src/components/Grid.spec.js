import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

export const GAME_CELL = {
  IMAGE_TYPE: 'box_art_url',
  IMAGE_SPLIT: '{',
  IMAGE_SIZE: '140x200.',
  NAME_LENGTH_LIMIT: 15,
  NAME: 'name',
  GRID_STYLE: 'wrapper',
  IMAGE_STYLE: 'gameImage',
  NAME_STYLE: 'gameName',
};

const fetchedGames = [
  {
    id: '21779',
    name: 'agbdfeafaeajrlekjalkj',
    box_art_url: 'https://static-cdn.jtvnw.net/thumb/thumb0-%{width}x%{height}.jpg',
  },
];

describe('<Grid />', () => {
  const grid = shallow(
    <Grid
      areaInfo={fetchedGames}
      cellInfo={GAME_CELL}
      onCellClick={() => {}}
    >
      {<div>Game: Overwatch</div>}
      {<div>title: Overwatch is..</div>}
    </Grid>
  );

  it('should cut game name size if name leangth is than bigger 15', () => {
    expect(grid.find('div.gameName').text()).toBe('agbdfeafaeajrle..');
  });

  it('should input correctly img src', () => {
    expect(grid.find('img').props().src).toBe('https://static-cdn.jtvnw.net/thumb/thumb0-%140x200.jpg');
  });
});