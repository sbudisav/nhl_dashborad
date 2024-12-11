import { makinnon } from "./makinnon";
import { allPlayersData } from "./playersData";

export const fetchAllPlayers = () => {
  console.log("Fetching all players");
};

export const fetchPlayer = () => {
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

export const fetchPlayerOverTime = () => {
  return makinnon;
};

export const fetchPlayerData = () => {
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
  console.log(mappedData);
  return mappedData;
};
