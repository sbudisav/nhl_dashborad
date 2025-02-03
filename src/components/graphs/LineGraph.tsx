import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PlayerPlot } from "../types";
import * as d3 from "d3";

interface LineGraphProps {
  players: PlayerPlot[];
}

function LineGraph({ players }: LineGraphProps) {
  // const [yAxis, setYAxis] = useState<"goals" | "assists">("goals");
  const [yAxis, setYAxis] = useState<string>("goals");

  const dateMap = new Map();

  players.forEach((player) => {
    if (player.gameLog === undefined) return;
    player.gameLog.forEach((game) => {
      if (!dateMap.has(game.gameDate)) {
        dateMap.set(game.gameDate, { date: game.gameDate });
      }
      dateMap.get(game.gameDate)![`${player.id}-goals`] = game.goalsAccumulated;
      dateMap.get(game.gameDate)![`${player.id}-assists`] =
        game.assistsAccumulated;
    });
  });

  const formattedData = Array.from(dateMap.values()).sort(
    (a, b) =>
      new Date(a.date as string).getTime() -
      new Date(b.date as string).getTime()
  );

  return (
    <div>
      <select
        value={yAxis}
        onChange={(e) => {
          setYAxis(e.target.value);
        }}
      >
        <option key={"goals"} value={"goals"}>
          Goals
        </option>
        <option key={"assists"} value={"assists"}>
          Assists
        </option>
      </select>

      <ResponsiveContainer width="130%" height={450}>
        <LineChart
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            label={"Date"}
            tickFormatter={(date) => new Date(date).toLocaleDateString("en-UB")}
          />
          <YAxis label={yAxis} />
          <Tooltip />
          <Legend />
          {players.map((player, index) => (
            <Line
              key={`${player.id}-${yAxis}`}
              name={player.name}
              type="linear"
              dataKey={`${player.id}-${yAxis}`}
              stroke={player.colorFill}
              strokeWidth={3}
              dot={true}
              connectNulls={true}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;
