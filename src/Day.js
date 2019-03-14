import React from 'react';
import styled from 'styled-components';
import { calWidth, rowHeight, hoverColor } from './utils/constants';

const Unit = styled.div`
    width: ${calWidth/7}px;
    height: ${rowHeight}px;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({ grey }) => grey ? 'hsl( 11, 0%, 90%)' : 'none'};
    color: ${({ highlight }) => highlight ? 'red' : 'none'};
    &:hover {
        background-color: ${({ setDate }) => setDate};
    }
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
    margin-top: 0;
    margin-bottom: -10px;
`;

const Dots = styled.div`
    margin: 0;
    padding: 0;
    background-color: none;
    text-align: center;
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

const Day = ({ weekDay, date, month, year, grey, highlight, setDate, events }) => {
    const dots = [];
    for (let i = 0; i < events; i++) {
        if (i > 6) {
            break;
        }
        dots.push('.')
    }
    const dotsToRender = dots.join('');
    return (
        <Unit setDate={setDate ? hoverColor : 'none'} grey={grey} highlight={highlight} onClick={setDate ? () => setDate(date, month, year) : ''}>
            <DayOf>{numToDayOfWeek(weekDay)}</DayOf>
            <Date>{date.toString()}</Date>
            <Dots>{dotsToRender}</Dots>
        </Unit>
    )
}

export default Day;
