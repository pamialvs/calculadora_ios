import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
`;

const Calculadora = styled.div`
  background-color: black;
  max-width: 350px;
  padding: 20px;
  border-radius: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.gray ? "#a5a5a5" : props.orange ? "#f1a33b" : "#333333"};
  width: 90px;
  height: 81px;
  border-radius: 50%;
  font-size: 32px;
  color: ${(props) =>
    props.white ? "#ffffff" : props.black ? "#000000" : "#333333"};
  margin: 5px;
  border: none;
  cursor: pointer;
`;

const Display = styled.div`
  width: 100%;
  font-size: 48px;
  color: white;
  text-align: right;
  margin: 10px;
`;

export default function App() {
  const [display, setDisplay] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState(0);

  const clicarNumero = (numero) => {
    if (!operador) {
      setNum1(num1 + numero);
      setDisplay(display + numero);
    } else {
      setNum2(num2 + numero);
      setDisplay(display + numero);
    }
  };

  const clicarOperador = (op) => {
    if (num1 && !operador) {
      setOperador(op);
      setDisplay(display + op);
    }
  };

  const calcular = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res = 0;
    switch (operador) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        if (number2 !== 0) {
          res = number1 / number2;
        } else {
          res = "Error";
        }
        break;
      default:
        res = 0;
    }

    setResultado(res);
    setDisplay(String(res));

    setNum1("");
    setNum2("");
    setOperador("");
  };

  return (
    <Container>
      <Calculadora>
        <Title>iCalculator</Title>
        <Display>{display}</Display>
        <ButtonGroup>
          <Button gray black onClick={() => setDisplay("")}>
            AC
          </Button>
          <Button gray black>
            +/-
          </Button>
          <Button gray black>
            %
          </Button>
          <Button orange white onClick={() => clicarOperador("/")}>
            /
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button white onClick={() => clicarNumero("7")}>
            7
          </Button>
          <Button white onClick={() => clicarNumero("8")}>
            8
          </Button>
          <Button white onClick={() => clicarNumero("9")}>
            9
          </Button>
          <Button white orange onClick={() => clicarOperador("*")}>
            x
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button white onClick={() => clicarNumero("4")}>
            4
          </Button>
          <Button white onClick={() => clicarNumero("5")}>
            5
          </Button>
          <Button white onClick={() => clicarNumero("6")}>
            6
          </Button>
          <Button white orange onClick={() => clicarOperador("-")}>
            -
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button white onClick={() => clicarNumero("1")}>
            1
          </Button>
          <Button white onClick={() => clicarNumero("2")}>
            2
          </Button>
          <Button white onClick={() => clicarNumero("3")}>
            3
          </Button>
          <Button orange white onClick={() => clicarOperador("+")}>
            +
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button white onClick={() => clicarNumero("0")}>
            0
          </Button>
          <Button white onClick={() => clicarNumero(".")}>
            .
          </Button>
          <Button orange white onClick={calcular}>
            =
          </Button>
        </ButtonGroup>
      </Calculadora>
    </Container>
  );
}
