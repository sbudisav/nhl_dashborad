import React, { useState } from "react";
import { Player, fakePlayers } from "./types";

type PlayerSearchProps = {
  onSelect: (player: Player) => void;
  selectedPlayers: Player[];
};

function PlayerSearch({ onSelect, selectedPlayers }: PlayerSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState<Player[]>([]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.length < 1) setSearchSuggestion([]);
    setSearchTerm(searchTerm);
    if (searchTerm.length > 0)
      setSearchSuggestion(
        fakePlayers.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  };

  const fetchData = () => {
    // Take search term
    // Find 10 players
    // Exclude current players
    // setSearchSuggestion(
    //   fakePlayers.filter((p) =>
    //     p.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   )
    // );
  };

  const handleSelectPlayer = (player: Player) => {
    onSelect(player);
    setSearchSuggestion(searchSuggestion.filter((p) => p.id !== player.id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a player"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchSuggestion.length > 0 && (
        <div>
          <ul className="player-suggestion-list">
            {searchSuggestion.map((player) => (
              <li
                key={player.id}
                onClick={() => handleSelectPlayer(player)}
                className="player-suggestion-item"
              >
                {player.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PlayerSearch;
