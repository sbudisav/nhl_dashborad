import React from "react";
import { Player } from "./types";

interface ScatterPlotProps {
  players: Player[];
  xAxis: string;
  yAxis: string;
}

function ScatterPlot({ players, xAxis, yAxis }: ScatterPlotProps) {
  return (
    <div>
      <h3>
        Scatter Plot (X: {xAxis}, Y: {yAxis})
      </h3>
      <div
        style={{
          border: "1px solid black",
          width: "400px",
          height: "400px",
          marginTop: "55px",
        }}
      >
        {players.map((player: Player) => (
          <div key={player.id}>{player.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ScatterPlot;
