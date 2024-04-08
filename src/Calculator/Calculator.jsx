import React, { useState } from "react";
import Button from "./Button";
import style from "./Calculator.module.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "DEL") {
      if (result !== "") {
        setResult(result.slice(0, -1));
      } else if (input !== "") {
        setInput(input.slice(0, -1));
      }
    } else if (value === "RESET") {
      clearDisplay();
    } else {
      if (value === "." && input.includes(".")) {
        return;
      }
      if (result !== "" && "+-*/".includes(value)) {
        setInput(result + value);
        clearResult();
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  const clearDisplay = () => {
    setInput("");
    clearResult();
  };

  const clearResult = () => {
    setResult("");
  };

  const calculateResult = () => {
    const calculatedResult = eval(input);
    setResult(calculatedResult);
    setInput("");
  };

  const buttons = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "*",
    "RESET",
    "=",
  ];
  const buttonsArray = buttons.map((e, i) => (
    <Button number={e} key={i} onClick={() => handleClick(e)} />
  ));

  return (
    <>
      <div className={style.container}>
        <div className={style.brandandtheme}>
          <h3>calc</h3>
        </div>
        <div className={style.dispalyresult}>
          {result !== "" ? result : input}
        </div>
        <div className={style.buttonscontainer}>{buttonsArray}</div>
      </div>
    </>
  );
}
