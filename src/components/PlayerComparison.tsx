import React, { useState } from "react";
import PlayerSearch from "./PlayerSearch";
import ScatterPlot from "./graphs/ScatterPlot";
import { Player, PlayerPlot } from "./types";
import PlayerList from "./PlayerList";

const playerComparisonLimit = 10;

function PlayerComparison() {
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerPlot[]>([]);

  const handlePlayerSelected = (playerToAdd: Player) => {
    if (
      playerToAdd &&
      selectedPlayers.length < playerComparisonLimit &&
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
      <button onClick={handleClearPlayers}>Clear</button>
      <PlayerSearch
        onSelect={handlePlayerSelected}
        selectedPlayers={selectedPlayers}
        limit={playerComparisonLimit}
      />
      <PlayerList
        limit={playerComparisonLimit}
        selectedPlayers={selectedPlayers}
        handleRemove={(playerId) => handleRemovePlayer(playerId)}
      />
      <ScatterPlot players={selectedPlayers} />
    </div>
  );
}

export default PlayerComparison;
