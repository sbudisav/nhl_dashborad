import { useQuery } from "@tanstack/react-query";
import { Game } from "../components/types";

const fetchPlayerData = async (playerId: number) => {
  const response = await fetch(
    `https://api-web.nhle.com/v1/player/${playerId}/game-log/20242025/2`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  const mappedData: Game[] = data.gameLog.map((game: any) => {
    return {
      gameId: game.gameId,
      gameDate: game.gameDate,
      goalsInGame: game.goals,
      assistsInGame: game.assists,
      opponentName: game.opponentCommonName.default,
    };
  });
  return mappedData;
};

export const usePlayerData = (playerId?: number) => {
  return useQuery({
    queryKey: ["playeId", playerId],
    queryFn: async () => fetchPlayerData(playerId!),
    enabled: !!playerId,
    staleTime: 1000 * 60 * 60, // 60 min
  });
};
