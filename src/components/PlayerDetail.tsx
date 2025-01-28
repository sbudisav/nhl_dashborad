import React, { useState } from "react";
import { Player, PlayerPlot } from "./types";
import { fetchMockPlayer } from "../services/playerApi";
import PlayerSearch from "./PlayerSearch";
import PlayerList from "./PlayerList";
import LineGraph from "./graphs/LineGraph";

const playerDetailLimit = 5;

function PlayerDetail() {
  const playerOverTime = fetchMockPlayer();
  const gamesPlayed = playerOverTime.games;

  const [selectedPlayers, setSelectedPlayers] = useState<PlayerPlot[]>([]);

  const handlePlayerSelected = (playerToAdd: Player) => {
    if (
      playerToAdd &&
      selectedPlayers.length < playerDetailLimit &&
      !selectedPlayers.some((player) => player.id === playerToAdd.id)
    ) {
      const playerPlot: PlayerPlot = {
        ...playerToAdd,
        colorFill: `hsl(${42 * selectedPlayers.length}, 75%, 60%)`,
        colorStroke: `hsl(${42 * selectedPlayers.length}, 75%, 47%)`,
        //  In the future this will probably have to be a second API call
        games: gamesPlayed || [],
      };
      setSelectedPlayers([...selectedPlayers, playerPlot]);
    }
  };

  const handleRemovePlayer = (playerId: number) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== playerId));
  };

  // const handleClearPlayers = () => {
  //   setSelectedPlayers([]);
  // };

  return (
    <div>
      <h2>Player Detail</h2>
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
      {selectedPlayers && (
        <div>
          <LineGraph players={selectedPlayers} />
        </div>
      )}
    </div>
  );
}

export default PlayerDetail;
