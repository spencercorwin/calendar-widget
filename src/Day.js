import React from 'react';
import styled from 'styled-components';
import { calWidth, rowHeight } from './utils/constants';

const Unit = styled.div`
    width: ${calWidth/7}px;
    height: ${rowHeight}px;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.grey ? 'grey' : 'none'}
`;

const DayOf = styled.p`
    text-align: center;
    font-size: 10px;
    margin: 0;
`;

const Date = styled.p`
    text-align: center;
    font-size: 12px;
    padding: 0;
    margin: 0;
`;

const numToDayOfWeek = (number) => {
    switch(number) {
        case 0: return 'Sun';
        case 1: return 'Mon';
        case 2: return 'Tues';
        case 3: return 'Wed';
        case 4: return 'Thur';
        case 5: return 'Fri';
        case 6: return 'Sat';
        case 7: return 'Sun';
        default: return '';
    }
}

const Day = ({ weekDay, date, grey }) => (
    <Unit grey={grey}>
        <DayOf>{numToDayOfWeek(weekDay)}</DayOf>
        <Date>{date.toString()}</Date>
    </Unit>
)

export default Day;
