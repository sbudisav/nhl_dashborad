import React, { useState } from "react";
import { Player } from "./types";
import { fetchMockPlayer } from "../services/playerApi";
import PlayerSearch from "./PlayerSearch";

function PlayerDetail() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const playerOverTime = fetchMockPlayer();

  const handlePlayerSelected = (playerToAdd: Player) => {
    // const foundPlayer = fakePlayers.find((p) =>
    //   p.name.toLowerCase().includes(playerName.toLowerCase())
    // );
    setSelectedPlayers([playerOverTime]);
  };

  const player = selectedPlayers[0];

  const handleClearPlayers = () => {
    return;
  };

  return (
    <div>
      <h2>Player Detail</h2>
      {selectedPlayers.length > 1 && (
        <div>
          <button onClick={handleClearPlayers}>Clear Players</button>
        </div>
      )}
      <PlayerSearch
        onSelect={handlePlayerSelected}
        selectedPlayers={selectedPlayers}
        limit={1}
      />
      {player && (
        <div>
          <h3>{player.name}</h3>
          <p>Points: {player.points}</p>
          <p>Assists: {player.assists}</p>
          <p>Time on Ice: {player.timeOnIce} minutes</p>
          <p>Fights: {player.fights}</p>
        </div>
      )}
    </div>
  );
}

export default PlayerDetail;
