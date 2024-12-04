import React, { useState } from "react";
import PlayerComparison from "./PlayerComparison";
import PlayerDetail from "./PlayerDetail";

type NavBarProps = {
  setActiveTab: any;
};

function Navbar({ setActiveTab }: NavBarProps) {
  return (
    <div>
      <header className="navbar">
        <button onClick={() => setActiveTab("playerComparison")}>
          Player Comparison
        </button>
        <button onClick={() => setActiveTab("playerDetail")}>
          Player Detail
        </button>
        <button onClick={() => setActiveTab("playerDetail")}>
          Player's Over Time
        </button>
      </header>
    </div>
  );
}

export default Navbar;
