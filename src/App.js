import React, { Component } from 'react';
import TopBar from './TopBar';
import DayGrid from './DayGrid';
import moment from 'moment';
import styled from 'styled-components';
import { calWidth, rowHeight } from './utils/constants';

const AppContainer = styled.div`
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    width: ${calWidth}px;
    margin-top: calc(50vh - ${rowHeight*5}px);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(new Date())
    }

    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
    this.incrementYear = this.incrementYear.bind(this);
    this.decrementYear = this.decrementYear.bind(this);
    this.setToToday = this.setToToday.bind(this);
  }

  incrementYear() {
    this.setState({
      date: this.state.date.year(this.state.date.year() + 1)
    })
  }

  decrementYear() {
    this.setState({
      date: this.state.date.year(this.state.date.year() - 1)
    })
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
      date: moment(new Date())
    })
  }

  render() {
    return (
      <AppContainer>
        <TopBar today={this.setToToday} incYear={this.incrementYear} decYear={this.decementYear} incMonth={this.incrementMonth} decMonth={this.decrementMonth} month={this.state.date.month()} year={this.state.date.year()}/>
        <DayGrid month={this.state.date.month()} days={this.state.date.daysInMonth()}/>
      </AppContainer>
    );
  }
}

export default App;
