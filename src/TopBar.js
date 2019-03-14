import React from 'react';
import { calWidth, rowHeight, borderRadius, hoverColor } from './utils/constants';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    width: ${calWidth}px;
    height: ${rowHeight + 20}px;
    background-color: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    box-sizing: border-box;
    border-top-left-radius: ${borderRadius}px;
    border-top-right-radius: ${borderRadius}px;
`;

const buttonBoxShadow = 'box-shadow: 1px 1px 1px;';

const ArrowContainer = styled.div`
    height: auto;
    width: auto;
    background-color: none;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: ${borderRadius}px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${buttonBoxShadow}
    &:hover {
        background-color: ${hoverColor};
    }
    &:active {
        background-color: white;
    }
`;

const Month = styled.div`
    color: black;
    background-color: none;
    padding: 0;
    margin-bottom: 0;
    margin-right: 6px;
`;

const Year = styled.div`
    color: black;
    margin-bottom: 0;
    padding: 0;
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding: 0;
    font-size: 20px;
    background-color: none;
`;

const TodayButton = styled.div`
    border-radius: ${borderRadius}px;
    background-color: none;
    border: 1px solid black;
    padding-left: 10px;
    padding-right: 10px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${buttonBoxShadow}
    &:hover {
        background-color: ${hoverColor};
    }
    &:active {
        background-color: white;
    }
`;

const HiddenContainer = styled.div`
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

export const TopBar = ({ month, year, incMonth, decMonth, today }) => (
    <ContainerDiv>
        <ArrowContainer onClick={decMonth}>Prev</ArrowContainer>
        <HiddenContainer>Today</HiddenContainer>
        <DateContainer>
            <Month>{numToMonth(month)}</Month>
            <Year>{year}</Year>
        </DateContainer>
        <TodayButton onClick={today}>Today</TodayButton>
        <ArrowContainer onClick={incMonth}>Next</ArrowContainer>
    </ContainerDiv>
)

export default TopBar;
