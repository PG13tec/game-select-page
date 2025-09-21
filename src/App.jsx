import React, { useState } from "react";
import GameCard from "./components/GameCard";
import "./index.css";
const games = [
  { name: "Escape The Lava", type: "Solo / Team", players: "1 to 6", img: "https://picsum.photos/400/260?random=1" },
  { name: "Find The Color", type: "Competition", players: "1 to 6", img: "https://picsum.photos/400/260?random=2" },
  { name: "Red Light Green Light", type: "Competition", players: "1 to 4", img: "https://picsum.photos/400/260?random=3" },
  { name: "Sharp Shooter", type: "Competition", players: "1 to 4", img: "https://picsum.photos/400/260?random=4" },
  { name: "Mystery Quest", type: "Adventure", players: "1 to 5", img: "https://picsum.photos/400/260?random=5" },
  { name: "Alien Invasion", type: "Survival", players: "1 to 3", img: "https://picsum.photos/400/260?random=6" },
];
export default function App() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (gameName) => { setSelected(gameName); console.log("Selected Game:", gameName); };
  return (
    <div className="app">
      <header className="header">
        <h1>🎮 Select Your Game</h1>
        <p className="sub">Click a card to select a game • Scroll to explore more</p>
      </header>
      <section className="controls-row">
        <div className="notice">Showing 4 games — more available →</div>
      </section>
      <main className="game-list" role="list">
        {games.map((g, i) => (
          <GameCard key={i} {...g} isSelected={selected===g.name} onSelect={()=>handleSelect(g.name)} />
        ))}
      </main>
    </div>
  );
}
