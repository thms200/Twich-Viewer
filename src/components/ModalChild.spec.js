import React from 'react';
import { shallow } from 'enzyme';
import ModalChild from './ModalChild';

const visibleInfo = {
  id: '123244',
  user: 'apple',
  title: 'apple is..',
  createAt: '2010-02-01',
  url: 'www.eret.azeraer.lere',
  thumnail: 'https://static-cdn.jtvnw.net/c',
  viewable: 'public',
  view_count: 417830,
  language: 'en',
  duration: "6m29s",
};

const nonVisibleInfo = {
  id: undefined,
  user: 'apple',
  title: 'apple is..',
  createAt: '2010-02-01',
  url: 'www.eret.azeraer.lere',
  thumnail: 'https://static-cdn.jtvnw.net/c',
  viewable: 'public',
  view_count: 417830,
  language: 'en',
  duration: "6m29s",
};

const visibleModal = shallow(
  <ModalChild 
    modalInfo={visibleInfo}
    onCloseModal={() => {}}
  />
);
const nonVisibleModal = shallow(
  <ModalChild 
    modalInfo={nonVisibleInfo}
    onCloseModal={() => {}}
  />
);

describe('<ModalChild />', () => {
  it('should contain information of selected video.(ex, title, username etc)', () => {
    expect(visibleModal.find('ul').children().at(0).text()).toContain('Title: apple is..');
    expect(visibleModal.find('ul').children().at(1).text()).toContain('User: apple');
    expect(visibleModal.find('ul').children().at(2).text()).toContain('Created at: 2010-02-01');
    expect(visibleModal.find('ul').children().at(3).text()).toContain('View: ');
    expect(visibleModal.find('ul').children().at(4).text()).toContain('Language: en');
    expect(visibleModal.find('ul').children().at(5).text()).toContain('Duration: 6m29s');
    expect(visibleModal.find('ul').children().at(6).text()).toContain('Viewable: public');
  });
  
  it('should not load video of motal when video is not selected.', () => {
    expect(visibleModal.find('div').children().at(0).children().at(0).length).toBe(1);
    expect(nonVisibleModal.find('div').children().at(0).children().at(0).length).toBe(0);
  });
});
