import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Day from './Day';
import DisplayEvents from './DisplayEvents';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';
import DayGrid from './DayGrid';

const sampleEvents = [
  {date: new Date(), event: 'Haircut'},
  {date: new Date(), event: 'Write code to eat the world'},
  {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Soccer game'},
  {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Pickup kids'},
  {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Make dinner'},
  {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Watch favorite TV show'},
  {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Read emails'},
  {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2), event: 'Party at Elliott\'s'}
]

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('DisplayEvents renders correctly', () => {
  const tree = renderer.create(<DisplayEvents display="true" events={sampleEvents} />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('TopBar renders correctly', () => {
  const topbar = renderer.create(<TopBar month={2} year={2019} incMonth={() => true} decMonth={() => true} today={new Date()} />).toJSON();
  expect(topbar).toMatchSnapshot();
})

it('DayGrid renders correctly', () => {
  const daygrid = renderer.create(<DayGrid year={2019} month={2} days={31} dateToDisplay={new Date()} setDate={() => true} events={sampleEvents} />).toJSON();
  expect(daygrid).toMatchSnapshot();
})

it('Day component renders correctly', () => {
  const day = renderer.create(<Day weekday={1} date={13} month={2} year={2019} grey="false" highlight="true" setDate={() => true} events={sampleEvents} />).toJSON();
  expect(day).toMatchSnapshot();
})