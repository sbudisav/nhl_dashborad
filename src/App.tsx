import React, { useState } from "react";
import "./App.css";
import PlayerComparison from "./components/PlayerComparison";
import PlayerDetail from "./components/PlayerDetail";

function App() {
  const [activeTab, setActiveTab] = useState("playerComparison");

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setActiveTab("playerComparison")}>
          Player Comparison
        </button>
        <button onClick={() => setActiveTab("playerDetail")}>
          Player Detail
        </button>
      </header>

      <div className="container">
        {activeTab === "playerComparison" && <PlayerComparison />}
        {activeTab === "playerDetail" && <PlayerDetail />}
      </div>
    </div>
  );
}

export default App;
