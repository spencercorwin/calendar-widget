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
    height: ${7*rowHeight}px;
    width: ${calWidth}px;
`;

const DayGrid = ({ month, days }) => {
    const daysToRender = [];
    const prevMonthDays = moment().month(moment().month(month - 1)).daysInMonth();
    for (let x = 1; x < 8; x++) {
        if (moment().month(month).date(1).day() !== x - 1) {
            daysToRender.push(<Day key={Math.random()*10000} weekDay={x - 1} date={''}/>);
        } else {
            break;
        }
    }
    for (let i = 1; i <= days; i++) {
        daysToRender.push(<Day key={i} weekDay={moment().month(month).date(i).day()} date={i} />)
    }
    return (
        <Grid>
            {daysToRender}
        </Grid>
    )
}

export default DayGrid;
