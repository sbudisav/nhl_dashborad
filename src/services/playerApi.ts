import { Game, Player } from "../components/types";
import { makinnon } from "./mockData/makinnon";
import { allPlayersData } from "./mockData/playersData";

export const fetchPlayer = () => {
  console.log("Fetching specific player");
  // fetch("https://api.nhle.com/stats/rest/en/skater/summary")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("RAW JSON", json);
  //         const results = json.map((player: any) => {
  //           ({
  //             id: player.id,
  //             name: player.firstName.default + " " + player.lastName.default,
  //           });
  //         });
  //     });
  return {};
};

export const fetchTeamRoster = () => {
  console.log("Fetching team roster");
  // fetch("https://api.nhle.com/stats/rest/en/skater/summary")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("RAW JSON", json);
  //         const results = json.map((player: any) => {
  //           ({
  //             id: player.id,
  //             name: player.firstName.default + " " + player.lastName.default,
  //           });
  //         });
  //     });
  return {};
};

// ********************************************************************
// ************************ MOCK DATA *********************************

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

export const fetchMockPlayer = (): Player => {
  const player = allPlayersData.data[1];
  const playerGames: Game[] = makinnon.gameLog.map((game: any) => {
    return {
      gameId: game.gameId,
      gameDate: game.gameDate,
      goalsInGame: game.goals,
      assistsInGame: game.assists,
      opponentName: game.opponentCommonName.default,
    };
  });

  const mappedData = {
    id: player.playerId,
    name: player.skaterFullName,
    points: player.points,
    goals: player.goals,
    assists: player.assists,
    timeOnIce: player.timeOnIcePerGame,
    fights: 0,
    games: playerGames,
  };
  return mappedData;
};
