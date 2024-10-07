import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ScatterPlot from "./ScatterPlot";
import { Player, fakePlayers } from "./types";

function PlayerComparison() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [xAxis, setXAxis] = useState("points");
  const [yAxis, setYAxis] = useState("assists");

  const handleSearch = (playerName: string) => {
    const player = fakePlayers.find((p) =>
      p.name.toLowerCase().includes(playerName.toLowerCase())
    );
    if (
      player &&
      selectedPlayers.length < 5 &&
      !selectedPlayers.includes(player)
    ) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleRemovePlayer = (playerId: number) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== playerId));
  };

  return (
    <div>
      <h2>Player Comparison</h2>
      <SearchBar onSearch={handleSearch} />
      <div>
        <h3>Selected Players:</h3>
        <ul>
          {selectedPlayers.map((player) => (
            <li key={player.id}>
              {player.name}{" "}
              <button onClick={() => handleRemovePlayer(player.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label>
          X Axis:
          <select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
            <option value="points">Points</option>
            <option value="assists">Assists</option>
            <option value="timeOnIce">Time on Ice</option>
            <option value="fights">Fights</option>
          </select>
        </label>
        <label>
          Y Axis:
          <select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
            <option value="points">Points</option>
            <option value="assists">Assists</option>
            <option value="timeOnIce">Time on Ice</option>
            <option value="fights">Fights</option>
          </select>
        </label>
      </div>
      <div className="scatterplot-container">
        <ScatterPlot players={selectedPlayers} xAxis={xAxis} yAxis={yAxis} />
      </div>
    </div>
  );
}

export default PlayerComparison;
