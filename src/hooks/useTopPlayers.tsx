import { useQuery } from "@tanstack/react-query";
import { Player } from "../components/types";
import { map } from "d3";

const fetchTopPlayers = async () => {
  const url =
    "https://api.nhle.com/stats/rest/en/skater/summary?" +
    new URLSearchParams({
      isAggregate: "false",
      isGame: "false",
      sort: JSON.stringify([
        { property: "points", direction: "DESC" },
        { property: "goals", direction: "DESC" },
        { property: "assists", direction: "DESC" },
        { property: "playerId", direction: "ASC" },
      ]),
      start: "0",
      limit: "50",
      cayenneExp: "gameTypeId=2 and seasonId<=20242025 and seasonId>=20242025",
    });

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch skater stats");

  const data = await response.json();

  const mappedData: Player[] = data.data.map((player: any) => {
    return {
      id: player.playerId,
      name: player.skaterFullName,
      points: player.points,
      goals: player.goals,
      assists: player.assists,
      timeOnIce: player.timeOnIcePerGame,
      fights: 0,
    };
  });
  return mappedData;
};

export const useTopPlayers = () => {
  return useQuery({
    queryKey: ["topPlayers"],
    queryFn: fetchTopPlayers,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false, // Don't refetch when component mounts
    refetchOnWindowFocus: false,
  });
};
