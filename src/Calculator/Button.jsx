import React from "react";
import style from "./Calculator.module.css";

export default function Button({ number, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {number}
    </button>
  );
}
