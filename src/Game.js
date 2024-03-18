import "./Game.css";
import React from "react";
import Die from "./components/Die.js";
import { nanoid } from "nanoid";



function Game({DiesCount,setDiesCount}) {
  const [diesProps, setDiesProps] = React.useState([]);
  const diesArray = diesProps.map((dieProps) => {
    return <Die dieProps={dieProps} toggleFixed={toggleFixed} />;
  });

  const allFixed = diesProps.every( (dieProps)=> dieProps.isFixed );
  const allEqual = diesProps.every( (dieProps)=> diesProps[0].value == dieProps.value)

  const gameEnded = allEqual && allFixed;

  React.useEffect(()=>{ setDiesProps(() => {
    const valuesArray = [];
    for (let i = 0; i < DiesCount; i++) {
      valuesArray.push({
        value: randomDie(),
        isFixed: false,
        id: nanoid(),
      });
    }
    return valuesArray;
  })}
  ,[DiesCount])

  function randomDie() {
    return Math.round(Math.random() * 5 + 1);
  }

  function buttonClick() {
    gameEnded ?
    //start New Game
       setDiesCount(0)      
     //Roll   
      : setDiesProps(
          diesProps.map((dieProps) => ({
            ...dieProps,
            value: !dieProps.isFixed ? randomDie() : dieProps.value,
          }))
        );
  }

  function toggleFixed(id) {
    setDiesProps(
      diesProps.map((dieProps) => ({
        ...dieProps,
        isFixed: id == dieProps.id ? !dieProps.isFixed : dieProps.isFixed,
      }))
    );
  }

  return (
    <div className="container">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dies-container">{diesArray}</div>
      <button className="roll-btn" onClick={buttonClick}>
        {gameEnded ? "Restart" : "Roll"}
      </button>
    </div>
  );
}

export default Game;

