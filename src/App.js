import "./App.css";
import React from "react";
import Game from './Game.js'
import LevelSelection from './LevelSelection.js'


function App() {
  const [diesCount, setDiesCount] = React.useState(0)

  console.log(diesCount)

  return (
    <main>
      {!diesCount && <LevelSelection setDiesCount={setDiesCount} />}
      <Game DiesCount = {diesCount} setDiesCount={setDiesCount}/>
    </main>
  );
}

export default App;
