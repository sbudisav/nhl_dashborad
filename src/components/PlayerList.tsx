import React from "react";
import { PlayerPlot } from "./types";

type PlayerListProps = {
  limit: number;
  selectedPlayers: PlayerPlot[];
  handleRemove: (number: number) => void;
};

function PlayerList({ limit, selectedPlayers, handleRemove }: PlayerListProps) {
  const handleRemovePlayer = (playerId: number) => {
    handleRemove(playerId);
  };

  // TO DO: Make these have cool drop down title cards

  return (
    <div>
      <div>
        {selectedPlayers.length === limit && (
          <div className="max-player-error">Max {limit} players </div>
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
    </div>
  );
}

export default PlayerList;
