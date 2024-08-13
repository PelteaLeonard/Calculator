/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  MenuIcon,
  TypeText,
  MainContainer,
  ExpressionText,
  ActionsContainer,
  ButtonsContainer,
} from "./styles";

const buttons = [
  "%",
  "CE",
  "C",
  "CH",
  "1/x",
  "x^2",
  "sqrt(x)",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "**",
  "0",
  ".",
  "=",
];

function StandardCalculator(props) {
  const { onOpen, setHistory } = props;

  const [expression, setExpression] = useState("0");

  const appendToExpression = (value) => {
    if (expression === "0") {
      setExpression(value);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const clearLastEntry = () => {
    if (expression.length === 1) {
      setExpression("0");
    } else {
      setExpression((prev) => prev.slice(0, -1));
    }
  };

  const clearExpression = () => {
    setExpression("0");
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const evaluateExpression = () => {
    try {
      setExpression(eval(expression).toString());
      setHistory((currentHistory) => [
        ...currentHistory,
        `${expression}=${eval(expression).toString()}`,
      ]);
    } catch (error) {
      setExpression("Error");
    }
  };

  const performSqrt = () => {
    setExpression(Math.sqrt(expression).toString());
  };

  const performSquare = () => {
    setExpression((parseFloat(expression) * 2).toString());
  };

  const performReciprocal = () => {
    setExpression((1 / expression).toString());
  };

  const handleClickButton = (button) => {
    switch (button) {
      case "CH":
        clearHistory();
        break;
      case "sqrt(x)":
        performSqrt();
        break;
      case "x^2":
        performSquare();
        break;
      case "1/x":
        performReciprocal();
        break;
      case "CE":
        clearLastEntry();
        break;
      case "C":
        clearExpression();
        break;
      case "=":
        evaluateExpression();
        break;
      default:
        appendToExpression(button);
        break;
    }
  };

  return (
    <MainContainer>
      <ActionsContainer>
        <MenuIcon onClick={onOpen} />
        <TypeText>Standard</TypeText>
      </ActionsContainer>
      <ExpressionText>{expression}</ExpressionText>
      <ButtonsContainer>
        {buttons.map((button) => (
          <Button key={button} onClick={() => handleClickButton(button)}>
            {button}
          </Button>
        ))}
      </ButtonsContainer>
    </MainContainer>
  );
}

export default StandardCalculator;
