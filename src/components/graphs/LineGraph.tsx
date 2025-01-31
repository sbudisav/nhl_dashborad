import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { PlayerPlot } from "../types";
interface LineGraphProps {
  players: PlayerPlot[];
}

function LineGraph({ players }: LineGraphProps) {
  const games = players[0]?.games;
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    drawChart();
  }, [players]);

  const drawChart = () => {
    if (games === undefined) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    let totalGoals = 0;

    const data = games.reverse().map((game) => {
      return {
        gameDate: new Date(game.gameDate),
        goalsInGame: (totalGoals += game.goalsInGame),
      };
    });

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.gameDate) as [Date, Date])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.goalsInGame) as number])
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(5);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

    g.append("g").call(yAxis);

    const line = d3
      .line<{ gameDate: Date; goalsInGame: number }>()
      .x((d) => xScale(d.gameDate))
      .y((d) => yScale(d.goalsInGame));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    g.selectAll(".point")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("cx", (d) => xScale(d.gameDate))
      .attr("cy", (d) => yScale(d.goalsInGame))
      .attr("r", 4)
      .attr("fill", "steelblue");
  };

  return (
    <div>
      <svg ref={svgRef} width={500} height={300} />
    </div>
  );
}

export default LineGraph;
