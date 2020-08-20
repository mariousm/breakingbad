import React from "react";
import styled from "@emotion/styled";

// Definimos los estilos del componente
const Div = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const consultarAPI = () => {
    console.log("consultando...");
  }

  return (
    <Div>
      <Button onClick={consultarAPI}>Breaking Bad</Button>
    </Div>
  );
}

export default App;
