import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PlayerComparison from "./components/PlayerComparison";
import PlayerDetail from "./components/PlayerDetail";

function App() {
  const [activeTab, setActiveTab] = useState("playerComparison");

  return (
    <div className="App">
      <Navbar setActiveTab={setActiveTab} />
      <div className="container">
        {activeTab === "playerComparison" && <PlayerComparison />}
        {activeTab === "playerDetail" && <PlayerDetail />}
      </div>
    </div>
  );
}

export default App;
