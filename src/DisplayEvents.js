import React from 'react';
import styled from 'styled-components';
import { calWidth, borderRadius } from './utils/constants';

const Container = styled.div`
    display: ${({ display }) => display ? 'block' : 'none'};
    border: 1px solid black;
    border-bottom-left-radius: ${borderRadius}px;
    border-bottom-right-radius: ${borderRadius}px;
    width: ${calWidth};
    height: auto;
`;

const Title = styled.p`
    margin-left: 10px;
`;

const DisplayEvents = ({ display, events }) => {
    const itemsToDisplay = events.map(event => <li>{event.event}</li>);
    return (
        <Container display={display}>
            <Title>{events.length === 0 ? 'No events today' : events[0].date.toDateString()}</Title>
            <ul>{itemsToDisplay}</ul>
        </Container>
    )
}

export default DisplayEvents;
