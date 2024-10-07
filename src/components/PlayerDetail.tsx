import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Player, fakePlayers } from "./types";

function PlayerDetail() {
  const [player, setPlayer] = useState<Player>();

  const handleSearch = (playerName: string) => {
    const foundPlayer = fakePlayers.find((p) =>
      p.name.toLowerCase().includes(playerName.toLowerCase())
    );
    setPlayer(foundPlayer);
  };

  return (
    <div>
      <h2>Player Detail</h2>
      <SearchBar onSearch={handleSearch} />
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