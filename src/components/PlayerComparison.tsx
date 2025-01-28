import React, { useState } from "react";
import PlayerSearch from "./PlayerSearch";
import ScatterPlot from "./graphs/ScatterPlot";
import {
  Player,
  PlayerPlot,
  scatterAxisValues,
  ScatterAxisValuesKeys,
} from "./types";

function PlayerComparison() {
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerPlot[]>([]);
  const [xAxis, setXAxis] = useState<ScatterAxisValuesKeys>("points");
  const [yAxis, setYAxis] = useState<ScatterAxisValuesKeys>("assists");

  const handlePlayerSelected = (playerToAdd: Player) => {
    if (
      playerToAdd &&
      selectedPlayers.length < 10 &&
      !selectedPlayers.some((player) => player.id === playerToAdd.id)
    ) {
      const playerPlot: PlayerPlot = {
        ...playerToAdd,
        colorFill: `hsl(${42 * selectedPlayers.length}, 75%, 60%)`,
        colorStroke: `hsl(${42 * selectedPlayers.length}, 75%, 47%)`,
      };
      setSelectedPlayers([...selectedPlayers, playerPlot]);
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
      {selectedPlayers.length > 10 && (
        <div>
          <button onClick={handleClearPlayers}>Clear Players</button>
        </div>
      )}
      <PlayerSearch
        onSelect={handlePlayerSelected}
        selectedPlayers={selectedPlayers}
        limit={10}
      />
      <div>
        {selectedPlayers.length === 10 && (
          <div className="max-player-error">Max 10 players </div>
        )}
        <h3>Selected Players:</h3>
        <ul className="selected-player-list">
          {selectedPlayers.map((player) => (
            <li
              key={player.id}
              className="selected-player"
              style={{ backgroundColor: player.colorFill }}
            >
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
          <select
            value={xAxis}
            onChange={(e) => {
              console.log("What is this", e.target);
              setXAxis(e.target.value);
            }}
          >
            {Object.keys(scatterAxisValues).map((key) => (
              <option key={key} value={key}>
                {scatterAxisValues[key]}
              </option>
            ))}
          </select>
        </label>
        <label>
          Y Axis:
          <select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
            {Object.keys(scatterAxisValues).map((key) => (
              <option key={key} value={key}>
                {scatterAxisValues[key]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ScatterPlot players={selectedPlayers} xAxis={xAxis} yAxis={yAxis} />
    </div>
  );
}

export default PlayerComparison;
