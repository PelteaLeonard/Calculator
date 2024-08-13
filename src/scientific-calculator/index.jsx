/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ActionsContainer,
  Button,
  ButtonsContainer,
  ExpressionText,
  MainContainer,
  MenuIcon,
  TypeText,
} from "./styles";

const buttons = [
  "sqrt3(x)",
  "π",
  "CE",
  "C",
  "CH",
  "1/x",
  "|x|",
  "ln",
  "e",
  "/",
  "sin",
  "7",
  "8",
  "9",
  "*",
  "cos",
  "4",
  "5",
  "6",
  "-",
  "tan",
  "1",
  "2",
  "3",
  "+",
  "cot",
  "**",
  "0",
  ".",
  "=",
];

function ScientificCalculator(props) {
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
    setExpression(Math.sqrt(parseFloat(expression)).toString());
  };

  const performReciprocal = () => {
    setExpression((1 / parseFloat(expression)).toString());
  };

  const setPi = () => {
    setExpression("3.1415926535");
  };

  const setEuler = () => {
    setExpression("2.71828");
  };

  const performCubeRoot = () => {
    setExpression(Math.cbrt(parseFloat(expression)).toString());
  };

  const performAbs = () => {
    setExpression(Math.abs(parseFloat(expression)).toString());
  };

  const performSin = () => {
    setExpression(Math.sin(parseFloat(expression)).toString());
  };

  const performCos = () => {
    setExpression(Math.cos(parseFloat(expression)).toString());
  };

  const performTan = () => {
    setExpression(Math.tan(parseFloat(expression)).toString());
  };

  const performCot = () => {
    setExpression(Math.cot(parseFloat(expression)).toString());
  };

  const performLn = () => {
    setExpression(Math.log(parseFloat(expression)).toString());
  };
  
  const clearHistory = () => {
    setHistory([]);
  };

  const handleClickButton = (button) => {
    switch (button) {
      case "CH":
        clearHistory();
        break;
      case "ln":
        performLn();
        break;
      case "cot":
        performCot();
        break;
      case "tan":
        performTan();
        break;
      case "cos":
        performCos();
        break;
      case "sin":
        performSin();
        break;
      case "|x|":
        performAbs();
        break;
      case "sqrt3(x)":
        performCubeRoot();
        break;
      case "π":
        setPi();
        break;
      case "e":
        setEuler();
        break;
      case "sqrt(x)":
        performSqrt();
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
        <TypeText>Scientific</TypeText>
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

export default ScientificCalculator;
