import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('<Button />', () => {
  const onHandleClick = jest.fn();
  const button = shallow(
    <Button 
      onButtonClick={onHandleClick}
      buttonText='>'
      buttonStyle='styles.moveButton'
    />
  );

  it('should call onButtonClicked when button is clicked', () => {
    expect(onHandleClick.mock.calls.length).toBe(0);
    button.simulate('click');
    expect(onHandleClick.mock.calls.length).toBe(1);
  });

  it('should show text prop (buttonInput)', () => {
    expect(button.text()).toEqual('>');
  });
});
