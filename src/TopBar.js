import React from 'react';
import { calWidth, rowHeight } from './utils/constants';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    width: ${calWidth}px;
    height: ${rowHeight + 10}px;
    background-color: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    box-sizing: border-box;
`;

const ArrowContainer = styled.div`
    height: auto;
    width: auto;
    background-color: none;
    padding-left: 5px;
    padding-right: 5px;
    border: 1px solid black;
`;

const Month = styled.div`
    color: black;
    background-color: none;
    padding: 0;
    margin: 0;
`;

const Year = styled.div`
    color: black;
    margin: 0;
    padding: 0;
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: ${rowHeight}px;
    overflow: hidden;
`;

const numToMonth = (num) => {
    switch(num) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: return '';
    }
}

export const TopBar = ({ month, year, incYear, decYear, incMonth, decMonth, today }) => (
    <ContainerDiv>
        <ArrowContainer onClick={decMonth}>Prev</ArrowContainer>
        <DateContainer>
            <Month>{numToMonth(month)}</Month>
            <Year>{year}</Year>
        </DateContainer>
        <button onClick={today}>Today</button>
        <ArrowContainer onClick={incMonth}>Next</ArrowContainer>
    </ContainerDiv>
)

export default TopBar;