// Librerías
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
// Componentes
import Frase from "./Components/Frase";
// Interfaces
import { IFrase } from "./Interfaces/IFrase";

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
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  // Definimos el state de la frase
  const [frase, guardarFrase] = useState<IFrase>({
    quote: "",
    author: "",
  });

  // Método que se ejecuta al pulsar el botón, en él consultamos a la API
  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  // Método que se ejecuta cuando el componente se carga o se produce un cambio en el state
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Div>
      <Frase frase={frase} />
      <Button onClick={consultarAPI}>Breaking Bad</Button>
    </Div>
  );
}

export default App;
