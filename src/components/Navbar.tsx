import React from "react";

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
          Player Detail Over Time
        </button>
      </header>
    </div>
  );
}

export default Navbar;
