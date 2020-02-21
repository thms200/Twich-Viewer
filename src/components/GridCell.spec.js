import React from 'react';
import { shallow } from 'enzyme';
import GridCell from './GridCell';

describe('<GridCell />', () => {
  const onHandleClick = jest.fn();
  const gridCell = shallow(
    <GridCell 
      id='29183'
      onCellClick={onHandleClick}
    >
      {<div>Game: Overwatch</div>}
      {<div>title: Overwatch is..</div>}
    </GridCell>
  );

  it('should render children', () => {
    expect(gridCell.children().at(0).text()).toBe('Game: Overwatch');
    expect(gridCell.children().at(1).text()).toBe('title: Overwatch is..');
  });

  it('should call onCellClick when gridCell is clicked', () => {
    gridCell.simulate('click', { currentTarget: { id: 2324 } });
    expect(onHandleClick.mock.calls.length).toBe(1);
  });
});
