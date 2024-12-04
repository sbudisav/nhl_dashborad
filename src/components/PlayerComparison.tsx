import React, { useState } from "react";
import PlayerSearch from "./PlayerSearch";
import ScatterPlot from "./graphs/ScatterPlot";
import { Player } from "./types";

const axisValues = [
  { type: "points", display: "Points" },
  { type: "goals", display: "Goals" },
  { type: "assists", display: "Assists" },
  { type: "timeOnIce", display: "Time on Ice" },
  { type: "fights", display: "Fights" },
];

function PlayerComparison() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [xAxis, setXAxis] = useState("points");
  const [yAxis, setYAxis] = useState("assists");

  const handlePlayerSelected = (player: Player) => {
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

  const handleClearPlayers = () => {
    setSelectedPlayers([]);
  };

  return (
    <div>
      <h2>Player Comparison</h2>
      <PlayerSearch
        onSelect={handlePlayerSelected}
        selectedPlayers={selectedPlayers}
        clearPlayers={handleClearPlayers}
      />
      <div>
        {selectedPlayers.length === 5 && (
          <div className="max-player-error">Max 5 players </div>
        )}
        <h3>Selected Players:</h3>
        <ul className="selected-player-list">
          {selectedPlayers.map((player) => (
            <li key={player.id} className="selected-player">
              <div className="selected-player-text">
                <span>{player.name}</span>
                <button
                  onClick={() => handleRemovePlayer(player.id)}
                  className="selected-player-remove-button"
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label>
          X Axis:
          <select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
            {axisValues.map((value) => (
              <option value={value.type}>{value.display}</option>
            ))}
          </select>
        </label>
        <label>
          Y Axis:
          <select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
            {axisValues.map((value) => (
              <option value={value.type}>{value.display}</option>
            ))}
          </select>
        </label>
      </div>
      <ScatterPlot players={selectedPlayers} xAxis={xAxis} yAxis={yAxis} />
    </div>
  );
}

export default PlayerComparison;
