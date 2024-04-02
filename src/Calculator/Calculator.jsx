import React, { useState } from "react";
import Button from "../Button";
import style from "./Calculator.module.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setNumbers([...numbers, parseFloat(input)]);
      calculateResult();
    } else if (value === "RESET") {
      clearDisplay();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const clearDisplay = () => {
    setInput("");
    setNumbers([]);
    setResult("");
  };

  const calculateResult = () => {};

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
        <div></div>
        <div className={style.buttonscontainer}>{buttonsArray}</div>
      </div>
    </>
  );
}
