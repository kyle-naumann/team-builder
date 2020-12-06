import React from "react"
import styled from "styled-components";

function Card(props) {
    const { person } = props;

    let StyledDiv = styled.div`

        margin: 20px;    
        border: 3px solid lightgray;
        width: 25%;
        color: black;
        float: left;
        padding-left: 20px;
        border-radius: 10px;
        background-color: lightblue;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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