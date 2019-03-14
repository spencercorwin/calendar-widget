import React, { Component } from 'react';
import TopBar from './TopBar';
import DayGrid from './DayGrid';
import moment from 'moment';
import styled from 'styled-components';
import { calWidth, rowHeight, borderRadius } from './utils/constants';
import DisplayEvents from './DisplayEvents';

const AppContainer = styled.div`
    border: 1px solid black;
    border-radius: ${borderRadius}px;
    margin-left: auto;
    margin-right: auto;
    width: ${calWidth}px;
    margin-top: calc(50vh - ${rowHeight*5}px);
    background-color: white;
    box-shadow: 1px 1px 1px;
`;

const EventsContainer = styled.div``;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(new Date()),
      displayEvents: true,
      dateToDisplay: new Date(),
      events: [
        {date: new Date(), event: 'Haircut'},
        {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Soccer game'},
        {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Pickup kids'},
        {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Make dinner'},
        {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Watch favorite TV show'},
        {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), event: 'Read emails'},
        {date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2), event: 'Party at Elliott\'s'}
      ]
    }

    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
    this.setToToday = this.setToToday.bind(this);
    this.setDateToDisplay = this.setDateToDisplay.bind(this);
  }

  incrementMonth() {
    this.setState({
      date: this.state.date.month(this.state.date.month() + 1)
    })
  }

  decrementMonth() {
    this.setState({
      date: this.state.date.month(this.state.date.month() - 1)
    })
  }

  setToToday() {
    this.setState({
      date: moment(new Date()),
      dateToDisplay: new Date()
    })
  }

  setDateToDisplay(date, month, year) {
    this.setState({
      dateToDisplay: new Date(year, month, date)
    })
  }

  render() {
    const eventsToPass = this.state.events.filter(event => event.date.getDate() === this.state.dateToDisplay.getDate());
    return (
      <AppContainer>
        <TopBar today={this.setToToday} incYear={this.incrementYear} decYear={this.decementYear} incMonth={this.incrementMonth} decMonth={this.decrementMonth} month={this.state.date.month()} year={this.state.date.year()}/>
        <DayGrid year={this.state.date.year()} month={this.state.date.month()} days={this.state.date.daysInMonth()} dateToDisplay={this.state.dateToDisplay} setDate={this.setDateToDisplay} events={this.state.events}/>
        <EventsContainer>
          <DisplayEvents display={this.state.displayEvents} events={eventsToPass}/>
        </EventsContainer>  
      </AppContainer>
    );
  }
}

export default App;
