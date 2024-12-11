import React, { useEffect, useRef } from "react";
import { Player, scatterAxisValues } from "../types";
import * as d3 from "d3";
import { AxisLeft } from "./AxisLeft";
import { AxisBottom } from "./AxisBottom";
import "./graphs.css";

interface ScatterPlotProps {
  players: Player[];
  xAxis: any;
  yAxis: any;
}

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

function ScatterPlot({ players, xAxis, yAxis }: ScatterPlotProps) {
  let hueValue = 0;
  const playerDataPoints = players.map((player) => {
    let hslFillColor = `hsl(${hueValue}, 70%, 60%)`;
    let hslStrokeColor = `hsl(${hueValue}, 70%, 45%)`;
    hueValue += 60;
    return { ...player, fillColor: hslFillColor, strokeColor: hslStrokeColor };
  });
  // We want dynamic width
  const width = 500;
  const height = 500;

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = d3.scaleLinear().domain([0, 40]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([0, 40]).range([0, boundsWidth]);

  const dataPoints = playerDataPoints.map((player, i) => {
    return (
      <circle
        key={i}
        r={7} // radius
        cx={xScale(player.points)} // position on the X axis
        cy={yScale(player.goals)} // on the Y axis
        stroke={player.strokeColor}
        fill={player.fillColor}
        className="scatter-plot-point"
      />
    );
  });

  return (
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
      <h3 className="scatter-plot-xlabel">{xAxis}</h3>
      <h3 className="scatter-plot-ylabel">{yAxis}</h3>
    </div>
  );
}

export default ScatterPlot;
