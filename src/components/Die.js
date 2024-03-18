import React from "react";
import "./styles/Die.css";

export default function Die(props) {
  return (
    <button
      className="die-container"
      onClick={()=>props.toggleFixed(props.dieProps.id)}
      style={{ backgroundColor: props.dieProps.isFixed ? "#59E391" : "white" }}
    >
      <h2 classNmae="die-value">{props.dieProps.value}</h2>
    </button>
  );
}
