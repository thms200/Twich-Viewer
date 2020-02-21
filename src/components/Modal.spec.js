import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

describe('<Modal />', () => {
  const nonActiveModal = renderer
    .create(
      <Modal
        activeFlag={false}
      >
        {<div>modal children</div>}
      </Modal>
    )
    .toJSON();

  it('renders correctly', () => {
    expect(nonActiveModal).toMatchSnapshot();
  });
});
