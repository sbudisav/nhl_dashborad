import React from "react";
import { Player } from "./types";

interface PlayerBannerProps {
  player: Player;
}

function PlayerBanner({ player }: PlayerBannerProps) {
  return (
    <div className="player-banner">
      <h2>{player.name}</h2>
    </div>
  );
}

export default PlayerBanner;
