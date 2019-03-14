import React from 'react';
import styled from 'styled-components';
import Day from './Day';
import { rowHeight, calWidth } from './utils/constants';
import moment from 'moment';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    height: ${({ days }) => (Math.round(days/8) + 1) * rowHeight}px;
    width: ${calWidth}px;
`;

const DayGrid = ({ year, month, days, dateToDisplay, setDate, events }) => {
    const daysToRender = [];
    const firstDayOfMonth = moment().month(month).date(1).day();
    const prevMonthDays = moment().month(month - 1).daysInMonth();
    for (let y = prevMonthDays - firstDayOfMonth + 1, x = 1; y <= prevMonthDays; y++, x++) {
        let numberOfEvents = events.filter(event => event.date.getFullYear() === year && event.date.getMonth() === month && event.date.getDate() === y).length;
        daysToRender.push(<Day key={Math.random()*10000} weekDay={x - 1} date={y} month={month} year={year} grey={true} events={numberOfEvents}/>);
    }
    for (let i = 1; i <= days; i++) {
        if (i === dateToDisplay.getDate() && dateToDisplay.getMonth() === month && dateToDisplay.getFullYear() === year) {
            let numberOfEvents = events.filter(event => event.date.getFullYear() === year && event.date.getMonth() === month && event.date.getDate() === i).length;
            daysToRender.push(<Day key={i} weekDay={moment().month(month).date(i).day()} date={i} month={month} year={year} grey={false} setDate={setDate} events={numberOfEvents} highlight={true}/>)
        } else {
            let numberOfEvents = events.filter(event => event.date.getFullYear() === year && event.date.getMonth() === month && event.date.getDate() === i).length;
            daysToRender.push(<Day key={i} weekDay={moment().month(month).date(i).day()} date={i} month={month} year={year} grey={false} setDate={setDate} events={numberOfEvents}/>)
        }
    }
    const lastDayOfMonth = moment().month(month).date(days).day();
    for (let x = lastDayOfMonth + 1, y = 1; x < 7; x++, y++) {
        let numberOfEvents = events.filter(event => event.date.getFullYear() === year && event.date.getMonth() === month && event.date.getDate() === y).length;
        daysToRender.push(<Day key={Math.random()*10000} weekDay={x} date={y} month={month} year={year} grey={true} events={numberOfEvents}/>)
    }
    const numberOfDaysRendered = daysToRender.length;
    return (
        <Grid days={numberOfDaysRendered}>
            {daysToRender}
        </Grid>
    )
}

export default DayGrid;
