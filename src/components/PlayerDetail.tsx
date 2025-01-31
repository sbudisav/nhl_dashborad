import React, { useEffect, useState } from "react";
import { Game, Player, PlayerPlot } from "./types";
import PlayerSearch from "./PlayerSearch";
import PlayerList from "./PlayerList";
import LineGraph from "./graphs/LineGraph";
import { usePlayerData } from "../hooks/usePlayerData";

const playerDetailLimit = 3;

function PlayerDetail() {
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerPlot[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();

  const { data, isSuccess } = usePlayerData(selectedPlayer?.id);

  useEffect(() => {
    if (isSuccess && data && selectedPlayer) {
      const playerPlot: PlayerPlot = {
        ...selectedPlayer,
        colorFill: `hsl(${42 * selectedPlayers.length}, 75%, 60%)`,
        colorStroke: `hsl(${42 * selectedPlayers.length}, 75%, 47%)`,
        games: data,
      };
      setSelectedPlayers([...selectedPlayers, playerPlot]);
    }
  }, [isSuccess]);

  const handlePlayerSelected = async (playerToAdd: Player) => {
    if (
      playerToAdd &&
      selectedPlayers.length < playerDetailLimit &&
      !selectedPlayers.some((player) => player.id === playerToAdd.id)
    ) {
      setSelectedPlayer(playerToAdd);
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
      <h2>Player Detail</h2>
      <button onClick={handleClearPlayers}>Clear</button>
      <PlayerSearch
        onSelect={handlePlayerSelected}
        selectedPlayers={selectedPlayers}
        limit={playerDetailLimit}
      />
      <PlayerList
        limit={playerDetailLimit}
        selectedPlayers={selectedPlayers}
        handleRemove={(playerId) => handleRemovePlayer(playerId)}
      />
      <div>
        <LineGraph players={selectedPlayers} />
      </div>
    </div>
  );
}

export default PlayerDetail;
