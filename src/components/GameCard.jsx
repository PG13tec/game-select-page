import React from "react";
export default function GameCard({ name, type, players, img, isSelected, onSelect }) {
  return (
    <article className={`game-card ${isSelected ? "selected":""}`} tabIndex={0} aria-label={name} onClick={onSelect}>
      <div className="img-wrap"><img src={img} alt={name} className="game-img" /></div>
      <div className="game-info">
        <h2 className="game-title">{name}</h2>
        <p className="meta"><strong>Type:</strong> {type}</p>
        <p className="meta"><strong>Players:</strong> {players}</p>
        <div className="actions"><button className="play-btn">Play Now</button></div>
      </div>
    </article>
  );
}
