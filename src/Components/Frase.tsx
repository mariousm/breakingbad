// Librerías
import React, { Fragment } from "react";
import styled from "@emotion/styled";
// Interfaces
import { IFrase } from "../Interfaces/IFrase";

// Definimos los estilos de la frase
const Div = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

// Definimos la interfaz para los props
interface IFraseProps {
  frase: IFrase;
}

const Frase = ({ frase }: IFraseProps) => {
  return (
    <Div>
      {frase.author === "" || frase.quote === "" ? null : (
        <Fragment>
          <h1>{frase.quote}</h1>
          <p> - {frase.author}</p>
        </Fragment>
      )}
    </Div>
  );
};

export default Frase;
