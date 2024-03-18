import React from "react";
import "./LevelSelection.css";

export default function LevelSelection({ setDiesCount }) {
  const levels = [
    { name: "Easy", diesCount: 10 },
    { name: "Medium", diesCount: 20 },
    { name: "Hard", diesCount: 30 },
  ];

  const levelsBtns = levels.map((level) => (
    <button
      className={`level-btn ${level.name}-btn`}
      onClick={() => setDiesCount(level.diesCount)}
    >
      {level.name}
    </button>
  ));

  return <div className="levels-container">
    <h1 className='levels-title'>Choose your level</h1>
    {levelsBtns}
  </div>;
}
