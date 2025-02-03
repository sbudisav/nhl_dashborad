import React, { useState } from "react";
import { scatterAxisValues, ScatterAxisValuesKeys } from "../types";
import * as d3 from "d3";
import { AxisLeft } from "./AxisLeft";
import { AxisBottom } from "./AxisBottom";
import { Tooltip } from "react-tooltip";
import "./graphs.css";

interface ScatterPlotProps {
  players: any[];
}

// NOTE: *********** Investigate the keys since it thinks they are a basic string

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

function ScatterPlot({ players }: ScatterPlotProps) {
  const [xAxis, setXAxis] = useState<ScatterAxisValuesKeys>("points");
  const [yAxis, setYAxis] = useState<ScatterAxisValuesKeys>("assists");

  const xDomain =
    players.length > 0
      ? players.reduce((max, player) => Math.max(max, player[xAxis]), 0) + 5
      : 40;
  const yDomain =
    players.length > 0
      ? players.reduce((max, player) => Math.max(max, player[yAxis]), 0) + 5
      : 40;

  // TODO set dynamic height/width based on window
  const width = 500;
  const height = 500;

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = d3.scaleLinear().domain([0, yDomain]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([0, xDomain]).range([0, boundsWidth]);

  const dataPoints = players.map((player, i) => {
    return (
      <circle
        key={i}
        r={7} // radius
        cx={xScale(player[xAxis])}
        cy={yScale(player[yAxis])}
        stroke={player.colorStroke}
        fill={player.colorFill}
        className="scatter-plot-point"
        data-tooltip-id="player-tooltip"
        data-tooltip-content={player.name}
      />
    );
  });

  return (
    <div>
      <Tooltip id="player-tooltip" />
      <div>
        <label>
          X Axis:
          <select
            value={xAxis}
            onChange={(e) => {
              setXAxis(e.target.value);
            }}
          >
            {Object.keys(scatterAxisValues).map((key) => (
              <option key={key} value={key}>
                {scatterAxisValues[key]}
              </option>
            ))}
          </select>
        </label>
        <label>
          Y Axis:
          <select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
            {Object.keys(scatterAxisValues).map((key) => (
              <option key={key} value={key}>
                {scatterAxisValues[key]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <svg width={width} height={height}>
          <g
            width={boundsWidth}
            height={boundsHeight}
            transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
          >
            {/* Y axis */}
            <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

            {/* X axis, use an additional translation to appear at the bottom */}
            <g transform={`translate(0, ${boundsHeight})`}>
              <AxisBottom
                xScale={xScale}
                pixelsPerTick={40}
                height={boundsHeight}
              />
            </g>
            {dataPoints}
          </g>
        </svg>
        <h3 className="scatter-plot-xlabel">{scatterAxisValues[xAxis]}</h3>
        <h3 className="scatter-plot-ylabel">{scatterAxisValues[yAxis]}</h3>
      </div>
    </div>
  );
}

export default ScatterPlot;
