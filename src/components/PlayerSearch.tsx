import React, { useRef, useState } from "react";
import { Player } from "./types";
import { fetchMockPlayerData } from "../services/playerApi";
import useClickOutside from "../hooks/useClickOutside";

type PlayerSearchProps = {
  onSelect: (player: Player) => void;
  selectedPlayers: Player[];
  limit: number;
};

const playerData = fetchMockPlayerData();

function PlayerSearch({ onSelect, selectedPlayers, limit }: PlayerSearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchSuggestion, setSearchSuggestion] = useState<Player[]>([]);
  const searchTextRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 1) setSearchSuggestion([]);
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      const suggestedPlayers = playerData.filter((p) =>
        p.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchSuggestion(suggestedPlayers.slice(0, 10));
    }
  };

  const handleSelectPlayer = (player: Player) => {
    onSelect(player);
    setSearchSuggestion(searchSuggestion.filter((p) => p.id !== player.id));
    if (selectedPlayers.length === limit) {
      // make search box invalid
      clearSearch();
    }
  };

  const clearSearch = () => {
    setSearchSuggestion([]);
    setSearchTerm("");
  };

  useClickOutside(searchTextRef, clearSearch);

  return (
    <div ref={searchTextRef}>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for a player"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchSuggestion.length > 0 && selectedPlayers.length !== 10 && (
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
