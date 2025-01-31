import { allPlayersData } from "./mockData/playersData";

export const fetchMockPlayerData = () => {
  const mappedData = allPlayersData.data.map((player: any) => {
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
