import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import { people } from "./Components/People";
import styled from "styled-components";
import Form from "./Components/Form"

function App() {
  const [names, setNames] = useState(people);

  const AppDiv = styled.div`
    display; flex;
    flex-wrap: wrap;
    `;

  return (
    <>
      <Form names={names} setNames={setNames} />
      <AppDiv className="App">
        {names.map((name)=>{
          return <Card key={Math.random()} person={name} />;
        })}
      </AppDiv>
      </>
  );
}

export default App;


