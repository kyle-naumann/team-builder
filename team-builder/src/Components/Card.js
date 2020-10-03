import React from "react"
import styled from "styled-components";

function Card(props) {
    const { person } = props;

    let StyledDiv = styled.div`
        border: 1px solid red;
        width: 25%;
        color: darkblue;
        `;


    return (
        <StyledDiv className="card">
            <p>Name: {person.name}</p>
            <p>E-Mail: {person.email}</p>
            <p>Role: {person.role}</p>
        </StyledDiv>
    );
}


export default Card;