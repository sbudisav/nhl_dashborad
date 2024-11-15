export const fetchPlayerData = () => {
  // TODO: Figure out the annoying NHL api and get data

  //   fetch("https://api.nhle.com/stats/rest/en/skater/summary")
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

  const mappedData = realData.data.map((player: any) => {
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

const realData = {
  data: [
    {
      assists: 23,
      evGoals: 4,
      evPoints: 17,
      faceoffWinPct: 0.50929,
      gameWinningGoals: 3,
      gamesPlayed: 16,
      goals: 7,
      lastName: "MacKinnon",
      otGoals: 1,
      penaltyMinutes: 12,
      playerId: 8477492,
      plusMinus: 1,
      points: 30,
      pointsPerGame: 1.875,
      positionCode: "C",
      ppGoals: 3,
      ppPoints: 13,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.10937,
      shootsCatches: "R",
      shots: 64,
      skaterFullName: "Nathan MacKinnon",
      teamAbbrevs: "COL",
      timeOnIcePerGame: 1401.1875,
    },
    {
      assists: 19,
      evGoals: 7,
      evPoints: 20,
      faceoffWinPct: 0.0,
      gameWinningGoals: 2,
      gamesPlayed: 15,
      goals: 9,
      lastName: "Kaprizov",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8478864,
      plusMinus: 14,
      points: 28,
      pointsPerGame: 1.86666,
      positionCode: "L",
      ppGoals: 2,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.19565,
      shootsCatches: "L",
      shots: 46,
      skaterFullName: "Kirill Kaprizov",
      teamAbbrevs: "MIN",
      timeOnIcePerGame: 1330.3333,
    },
    {
      assists: 12,
      evGoals: 6,
      evPoints: 16,
      faceoffWinPct: 0.39252,
      gameWinningGoals: 0,
      gamesPlayed: 16,
      goals: 12,
      lastName: "Reinhart",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8477933,
      plusMinus: 12,
      points: 24,
      pointsPerGame: 1.5,
      positionCode: "C",
      ppGoals: 3,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 3,
      shPoints: 3,
      shootingPct: 0.29268,
      shootsCatches: "R",
      shots: 41,
      skaterFullName: "Sam Reinhart",
      teamAbbrevs: "FLA",
      timeOnIcePerGame: 1219.9375,
    },
    {
      assists: 19,
      evGoals: 5,
      evPoints: 16,
      faceoffWinPct: 0.4741,
      gameWinningGoals: 0,
      gamesPlayed: 15,
      goals: 5,
      lastName: "Eichel",
      otGoals: 0,
      penaltyMinutes: 2,
      playerId: 8478403,
      plusMinus: 8,
      points: 24,
      pointsPerGame: 1.6,
      positionCode: "C",
      ppGoals: 0,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.125,
      shootsCatches: "R",
      shots: 40,
      skaterFullName: "Jack Eichel",
      teamAbbrevs: "VGK",
      timeOnIcePerGame: 1228.2,
    },
    {
      assists: 16,
      evGoals: 5,
      evPoints: 15,
      faceoffWinPct: 0.31818,
      gameWinningGoals: 3,
      gamesPlayed: 14,
      goals: 8,
      lastName: "Necas",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8480039,
      plusMinus: 11,
      points: 24,
      pointsPerGame: 1.71428,
      positionCode: "C",
      ppGoals: 3,
      ppPoints: 9,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.25,
      shootsCatches: "R",
      shots: 32,
      skaterFullName: "Martin Necas",
      teamAbbrevs: "CAR",
      timeOnIcePerGame: 1054.8571,
    },
    {
      assists: 18,
      evGoals: 3,
      evPoints: 11,
      faceoffWinPct: null,
      gameWinningGoals: 1,
      gamesPlayed: 16,
      goals: 6,
      lastName: "Makar",
      otGoals: 0,
      penaltyMinutes: 2,
      playerId: 8480069,
      plusMinus: -7,
      points: 24,
      pointsPerGame: 1.5,
      positionCode: "D",
      ppGoals: 2,
      ppPoints: 12,
      seasonId: 20242025,
      shGoals: 1,
      shPoints: 1,
      shootingPct: 0.13043,
      shootsCatches: "R",
      shots: 46,
      skaterFullName: "Cale Makar",
      teamAbbrevs: "COL",
      timeOnIcePerGame: 1461.8125,
    },
    {
      assists: 12,
      evGoals: 10,
      evPoints: 16,
      faceoffWinPct: null,
      gameWinningGoals: 2,
      gamesPlayed: 14,
      goals: 11,
      lastName: "Kucherov",
      otGoals: 0,
      penaltyMinutes: 2,
      playerId: 8476453,
      plusMinus: 6,
      points: 23,
      pointsPerGame: 1.64285,
      positionCode: "R",
      ppGoals: 1,
      ppPoints: 7,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.2037,
      shootsCatches: "L",
      shots: 54,
      skaterFullName: "Nikita Kucherov",
      teamAbbrevs: "TBL",
      timeOnIcePerGame: 1295.3571,
    },
    {
      assists: 11,
      evGoals: 6,
      evPoints: 16,
      faceoffWinPct: 0.0,
      gameWinningGoals: 3,
      gamesPlayed: 16,
      goals: 11,
      lastName: "Connor",
      otGoals: 1,
      penaltyMinutes: 6,
      playerId: 8478398,
      plusMinus: 11,
      points: 22,
      pointsPerGame: 1.375,
      positionCode: "L",
      ppGoals: 4,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 1,
      shPoints: 1,
      shootingPct: 0.17741,
      shootsCatches: "L",
      shots: 62,
      skaterFullName: "Kyle Connor",
      teamAbbrevs: "WPG",
      timeOnIcePerGame: 1179.875,
    },
    {
      assists: 18,
      evGoals: 4,
      evPoints: 17,
      faceoffWinPct: 0.53846,
      gameWinningGoals: 0,
      gamesPlayed: 14,
      goals: 4,
      lastName: "Strome",
      otGoals: 0,
      penaltyMinutes: 8,
      playerId: 8478440,
      plusMinus: 11,
      points: 22,
      pointsPerGame: 1.57142,
      positionCode: "C",
      ppGoals: 0,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.16,
      shootsCatches: "L",
      shots: 25,
      skaterFullName: "Dylan Strome",
      teamAbbrevs: "WSH",
      timeOnIcePerGame: 1044.6428,
    },
    {
      assists: 12,
      evGoals: 6,
      evPoints: 14,
      faceoffWinPct: null,
      gameWinningGoals: 1,
      gamesPlayed: 14,
      goals: 10,
      lastName: "Panarin",
      otGoals: 0,
      penaltyMinutes: 2,
      playerId: 8478550,
      plusMinus: 1,
      points: 22,
      pointsPerGame: 1.57142,
      positionCode: "L",
      ppGoals: 4,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.20408,
      shootsCatches: "R",
      shots: 49,
      skaterFullName: "Artemi Panarin",
      teamAbbrevs: "NYR",
      timeOnIcePerGame: 1182.8571,
    },
    {
      assists: 15,
      evGoals: 4,
      evPoints: 13,
      faceoffWinPct: null,
      gameWinningGoals: 1,
      gamesPlayed: 13,
      goals: 6,
      lastName: "Stone",
      otGoals: 0,
      penaltyMinutes: 0,
      playerId: 8475913,
      plusMinus: 9,
      points: 21,
      pointsPerGame: 1.61538,
      positionCode: "R",
      ppGoals: 2,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.23076,
      shootsCatches: "R",
      shots: 26,
      skaterFullName: "Mark Stone",
      teamAbbrevs: "VGK",
      timeOnIcePerGame: 1147.1538,
    },
    {
      assists: 12,
      evGoals: 8,
      evPoints: 13,
      faceoffWinPct: 0.50684,
      gameWinningGoals: 2,
      gamesPlayed: 16,
      goals: 9,
      lastName: "Scheifele",
      otGoals: 1,
      penaltyMinutes: 6,
      playerId: 8476460,
      plusMinus: 8,
      points: 21,
      pointsPerGame: 1.3125,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.23684,
      shootsCatches: "R",
      shots: 38,
      skaterFullName: "Mark Scheifele",
      teamAbbrevs: "WPG",
      timeOnIcePerGame: 1220.4375,
    },
    {
      assists: 12,
      evGoals: 5,
      evPoints: 12,
      faceoffWinPct: 0.54098,
      gameWinningGoals: 2,
      gamesPlayed: 16,
      goals: 9,
      lastName: "Rantanen",
      otGoals: 0,
      penaltyMinutes: 14,
      playerId: 8478420,
      plusMinus: 0,
      points: 21,
      pointsPerGame: 1.3125,
      positionCode: "R",
      ppGoals: 4,
      ppPoints: 9,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.19148,
      shootsCatches: "L",
      shots: 47,
      skaterFullName: "Mikko Rantanen",
      teamAbbrevs: "COL",
      timeOnIcePerGame: 1392.4375,
    },
    {
      assists: 16,
      evGoals: 3,
      evPoints: 12,
      faceoffWinPct: 0.0,
      gameWinningGoals: 0,
      gamesPlayed: 19,
      goals: 5,
      lastName: "Bratt",
      otGoals: 0,
      penaltyMinutes: 10,
      playerId: 8479407,
      plusMinus: 1,
      points: 21,
      pointsPerGame: 1.10526,
      positionCode: "L",
      ppGoals: 2,
      ppPoints: 9,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.09259,
      shootsCatches: "L",
      shots: 54,
      skaterFullName: "Jesper Bratt",
      teamAbbrevs: "NJD",
      timeOnIcePerGame: 1088.0,
    },
    {
      assists: 8,
      evGoals: 10,
      evPoints: 16,
      faceoffWinPct: 0.56666,
      gameWinningGoals: 4,
      gamesPlayed: 16,
      goals: 12,
      lastName: "Draisaitl",
      otGoals: 3,
      penaltyMinutes: 10,
      playerId: 8477934,
      plusMinus: 7,
      points: 20,
      pointsPerGame: 1.25,
      positionCode: "C",
      ppGoals: 2,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.3,
      shootsCatches: "L",
      shots: 40,
      skaterFullName: "Leon Draisaitl",
      teamAbbrevs: "EDM",
      timeOnIcePerGame: 1253.8125,
    },
    {
      assists: 11,
      evGoals: 6,
      evPoints: 14,
      faceoffWinPct: null,
      gameWinningGoals: 1,
      gamesPlayed: 16,
      goals: 9,
      lastName: "Ehlers",
      otGoals: 1,
      penaltyMinutes: 2,
      playerId: 8477940,
      plusMinus: 12,
      points: 20,
      pointsPerGame: 1.25,
      positionCode: "L",
      ppGoals: 3,
      ppPoints: 6,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.2093,
      shootsCatches: "L",
      shots: 43,
      skaterFullName: "Nikolaj Ehlers",
      teamAbbrevs: "WPG",
      timeOnIcePerGame: 946.1875,
    },
    {
      assists: 16,
      evGoals: 2,
      evPoints: 10,
      faceoffWinPct: 0.16666,
      gameWinningGoals: 1,
      gamesPlayed: 17,
      goals: 4,
      lastName: "Marner",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8478483,
      plusMinus: 0,
      points: 20,
      pointsPerGame: 1.17647,
      positionCode: "R",
      ppGoals: 1,
      ppPoints: 9,
      seasonId: 20242025,
      shGoals: 1,
      shPoints: 1,
      shootingPct: 0.08888,
      shootsCatches: "R",
      shots: 45,
      skaterFullName: "Mitch Marner",
      teamAbbrevs: "TOR",
      timeOnIcePerGame: 1287.2352,
    },
    {
      assists: 13,
      evGoals: 6,
      evPoints: 13,
      faceoffWinPct: 0.29487,
      gameWinningGoals: 0,
      gamesPlayed: 15,
      goals: 7,
      lastName: "Stützle",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8482116,
      plusMinus: 2,
      points: 20,
      pointsPerGame: 1.33333,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 7,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.24137,
      shootsCatches: "L",
      shots: 29,
      skaterFullName: "Tim Stützle",
      teamAbbrevs: "OTT",
      timeOnIcePerGame: 1174.4666,
    },
    {
      assists: 11,
      evGoals: 6,
      evPoints: 14,
      faceoffWinPct: 0.30769,
      gameWinningGoals: 1,
      gamesPlayed: 16,
      goals: 8,
      lastName: "McCann",
      otGoals: 1,
      penaltyMinutes: 2,
      playerId: 8477955,
      plusMinus: 7,
      points: 19,
      pointsPerGame: 1.1875,
      positionCode: "L",
      ppGoals: 2,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.20512,
      shootsCatches: "L",
      shots: 39,
      skaterFullName: "Jared McCann",
      teamAbbrevs: "SEA",
      timeOnIcePerGame: 1014.0625,
    },
    {
      assists: 11,
      evGoals: 6,
      evPoints: 13,
      faceoffWinPct: 0.38285,
      gameWinningGoals: 2,
      gamesPlayed: 19,
      goals: 8,
      lastName: "Hughes",
      otGoals: 1,
      penaltyMinutes: 0,
      playerId: 8481559,
      plusMinus: 3,
      points: 19,
      pointsPerGame: 1.0,
      positionCode: "C",
      ppGoals: 2,
      ppPoints: 6,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.12307,
      shootsCatches: "L",
      shots: 65,
      skaterFullName: "Jack Hughes",
      teamAbbrevs: "NJD",
      timeOnIcePerGame: 1232.421,
    },
    {
      assists: 8,
      evGoals: 8,
      evPoints: 14,
      faceoffWinPct: null,
      gameWinningGoals: 2,
      gamesPlayed: 14,
      goals: 10,
      lastName: "Ovechkin",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8471214,
      plusMinus: 9,
      points: 18,
      pointsPerGame: 1.28571,
      positionCode: "L",
      ppGoals: 2,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.2,
      shootsCatches: "R",
      shots: 50,
      skaterFullName: "Alex Ovechkin",
      teamAbbrevs: "WSH",
      timeOnIcePerGame: 1082.2142,
    },
    {
      assists: 13,
      evGoals: 4,
      evPoints: 13,
      faceoffWinPct: 0.49166,
      gameWinningGoals: 1,
      gamesPlayed: 17,
      goals: 5,
      lastName: "Malkin",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8471215,
      plusMinus: -1,
      points: 18,
      pointsPerGame: 1.05882,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.1282,
      shootsCatches: "L",
      shots: 39,
      skaterFullName: "Evgeni Malkin",
      teamAbbrevs: "PIT",
      timeOnIcePerGame: 1157.0,
    },
    {
      assists: 13,
      evGoals: 4,
      evPoints: 9,
      faceoffWinPct: 0.53627,
      gameWinningGoals: 3,
      gamesPlayed: 17,
      goals: 5,
      lastName: "Kopitar",
      otGoals: 0,
      penaltyMinutes: 0,
      playerId: 8471685,
      plusMinus: 3,
      points: 18,
      pointsPerGame: 1.05882,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 1,
      shootingPct: 0.29411,
      shootsCatches: "L",
      shots: 17,
      skaterFullName: "Anze Kopitar",
      teamAbbrevs: "LAK",
      timeOnIcePerGame: 1136.7647,
    },
    {
      assists: 10,
      evGoals: 6,
      evPoints: 10,
      faceoffWinPct: 0.54901,
      gameWinningGoals: 2,
      gamesPlayed: 14,
      goals: 8,
      lastName: "Duchene",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8475168,
      plusMinus: 8,
      points: 18,
      pointsPerGame: 1.28571,
      positionCode: "C",
      ppGoals: 2,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.36363,
      shootsCatches: "L",
      shots: 22,
      skaterFullName: "Matt Duchene",
      teamAbbrevs: "DAL",
      timeOnIcePerGame: 974.7142,
    },
    {
      assists: 11,
      evGoals: 4,
      evPoints: 11,
      faceoffWinPct: 0.47639,
      gameWinningGoals: 0,
      gamesPlayed: 17,
      goals: 7,
      lastName: "Granlund",
      otGoals: 0,
      penaltyMinutes: 10,
      playerId: 8475798,
      plusMinus: -5,
      points: 18,
      pointsPerGame: 1.05882,
      positionCode: "C",
      ppGoals: 3,
      ppPoints: 7,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.1228,
      shootsCatches: "L",
      shots: 57,
      skaterFullName: "Mikael Granlund",
      teamAbbrevs: "SJS",
      timeOnIcePerGame: 1289.5882,
    },
    {
      assists: 7,
      evGoals: 7,
      evPoints: 10,
      faceoffWinPct: 0.51063,
      gameWinningGoals: 3,
      gamesPlayed: 17,
      goals: 11,
      lastName: "Nylander",
      otGoals: 0,
      penaltyMinutes: 8,
      playerId: 8477939,
      plusMinus: 2,
      points: 18,
      pointsPerGame: 1.05882,
      positionCode: "R",
      ppGoals: 4,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.18644,
      shootsCatches: "R",
      shots: 59,
      skaterFullName: "William Nylander",
      teamAbbrevs: "TOR",
      timeOnIcePerGame: 1116.0,
    },
    {
      assists: 7,
      evGoals: 10,
      evPoints: 14,
      faceoffWinPct: 0.4266,
      gameWinningGoals: 1,
      gamesPlayed: 16,
      goals: 11,
      lastName: "Thompson",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8479420,
      plusMinus: 7,
      points: 18,
      pointsPerGame: 1.125,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.21568,
      shootsCatches: "R",
      shots: 51,
      skaterFullName: "Tage Thompson",
      teamAbbrevs: "BUF",
      timeOnIcePerGame: 1099.25,
    },
    {
      assists: 10,
      evGoals: 4,
      evPoints: 11,
      faceoffWinPct: 0.45454,
      gameWinningGoals: 1,
      gamesPlayed: 15,
      goals: 8,
      lastName: "Tkachuk",
      otGoals: 1,
      penaltyMinutes: 27,
      playerId: 8480801,
      plusMinus: 0,
      points: 18,
      pointsPerGame: 1.2,
      positionCode: "L",
      ppGoals: 4,
      ppPoints: 7,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.12903,
      shootsCatches: "L",
      shots: 62,
      skaterFullName: "Brady Tkachuk",
      teamAbbrevs: "OTT",
      timeOnIcePerGame: 1091.2,
    },
    {
      assists: 15,
      evGoals: 1,
      evPoints: 10,
      faceoffWinPct: null,
      gameWinningGoals: 0,
      gamesPlayed: 16,
      goals: 2,
      lastName: "Morrissey",
      otGoals: 0,
      penaltyMinutes: 8,
      playerId: 8477504,
      plusMinus: 8,
      points: 17,
      pointsPerGame: 1.0625,
      positionCode: "D",
      ppGoals: 1,
      ppPoints: 7,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.0625,
      shootsCatches: "L",
      shots: 32,
      skaterFullName: "Josh Morrissey",
      teamAbbrevs: "WPG",
      timeOnIcePerGame: 1453.25,
    },
    {
      assists: 9,
      evGoals: 7,
      evPoints: 16,
      faceoffWinPct: 0.25,
      gameWinningGoals: 0,
      gamesPlayed: 15,
      goals: 8,
      lastName: "Barbashev",
      otGoals: 0,
      penaltyMinutes: 2,
      playerId: 8477964,
      plusMinus: 8,
      points: 17,
      pointsPerGame: 1.13333,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 1,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.28571,
      shootsCatches: "L",
      shots: 28,
      skaterFullName: "Ivan Barbashev",
      teamAbbrevs: "VGK",
      timeOnIcePerGame: 990.0,
    },
    {
      assists: 12,
      evGoals: 3,
      evPoints: 13,
      faceoffWinPct: 0.48936,
      gameWinningGoals: 1,
      gamesPlayed: 13,
      goals: 5,
      lastName: "McDavid",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8478402,
      plusMinus: 5,
      points: 17,
      pointsPerGame: 1.30769,
      positionCode: "C",
      ppGoals: 2,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.11363,
      shootsCatches: "L",
      shots: 44,
      skaterFullName: "Connor McDavid",
      teamAbbrevs: "EDM",
      timeOnIcePerGame: 1217.1538,
    },
    {
      assists: 9,
      evGoals: 2,
      evPoints: 10,
      faceoffWinPct: 0.33333,
      gameWinningGoals: 0,
      gamesPlayed: 16,
      goals: 8,
      lastName: "Konecny",
      otGoals: 0,
      penaltyMinutes: 23,
      playerId: 8478439,
      plusMinus: -7,
      points: 17,
      pointsPerGame: 1.0625,
      positionCode: "R",
      ppGoals: 5,
      ppPoints: 6,
      seasonId: 20242025,
      shGoals: 1,
      shPoints: 1,
      shootingPct: 0.18604,
      shootsCatches: "R",
      shots: 43,
      skaterFullName: "Travis Konecny",
      teamAbbrevs: "PHI",
      timeOnIcePerGame: 1266.6875,
    },
    {
      assists: 7,
      evGoals: 6,
      evPoints: 10,
      faceoffWinPct: 0.54585,
      gameWinningGoals: 1,
      gamesPlayed: 19,
      goals: 10,
      lastName: "Hischier",
      otGoals: 0,
      penaltyMinutes: 0,
      playerId: 8480002,
      plusMinus: 9,
      points: 17,
      pointsPerGame: 0.89473,
      positionCode: "C",
      ppGoals: 4,
      ppPoints: 6,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 1,
      shootingPct: 0.1923,
      shootsCatches: "L",
      shots: 52,
      skaterFullName: "Nico Hischier",
      teamAbbrevs: "NJD",
      timeOnIcePerGame: 1221.7894,
    },
    {
      assists: 11,
      evGoals: 5,
      evPoints: 12,
      faceoffWinPct: 0.4909,
      gameWinningGoals: 0,
      gamesPlayed: 16,
      goals: 6,
      lastName: "Suzuki",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8480018,
      plusMinus: -3,
      points: 17,
      pointsPerGame: 1.0625,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.17142,
      shootsCatches: "R",
      shots: 35,
      skaterFullName: "Nick Suzuki",
      teamAbbrevs: "MTL",
      timeOnIcePerGame: 1196.5625,
    },
    {
      assists: 14,
      evGoals: 1,
      evPoints: 11,
      faceoffWinPct: null,
      gameWinningGoals: 1,
      gamesPlayed: 16,
      goals: 3,
      lastName: "Pionk",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8480145,
      plusMinus: 12,
      points: 17,
      pointsPerGame: 1.0625,
      positionCode: "D",
      ppGoals: 2,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 1,
      shootingPct: 0.0909,
      shootsCatches: "R",
      shots: 33,
      skaterFullName: "Neal Pionk",
      teamAbbrevs: "WPG",
      timeOnIcePerGame: 1270.125,
    },
    {
      assists: 10,
      evGoals: 4,
      evPoints: 10,
      faceoffWinPct: 0.57364,
      gameWinningGoals: 3,
      gamesPlayed: 17,
      goals: 6,
      lastName: "Crosby",
      otGoals: 2,
      penaltyMinutes: 8,
      playerId: 8471675,
      plusMinus: -5,
      points: 16,
      pointsPerGame: 0.94117,
      positionCode: "C",
      ppGoals: 2,
      ppPoints: 6,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.12,
      shootsCatches: "L",
      shots: 50,
      skaterFullName: "Sidney Crosby",
      teamAbbrevs: "PIT",
      timeOnIcePerGame: 1220.8235,
    },
    {
      assists: 9,
      evGoals: 4,
      evPoints: 12,
      faceoffWinPct: 1.0,
      gameWinningGoals: 2,
      gamesPlayed: 17,
      goals: 7,
      lastName: "Pastrnak",
      otGoals: 1,
      penaltyMinutes: 18,
      playerId: 8477956,
      plusMinus: 0,
      points: 16,
      pointsPerGame: 0.94117,
      positionCode: "R",
      ppGoals: 3,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.0921,
      shootsCatches: "R",
      shots: 76,
      skaterFullName: "David Pastrnak",
      teamAbbrevs: "BOS",
      timeOnIcePerGame: 1189.5294,
    },
    {
      assists: 10,
      evGoals: 5,
      evPoints: 8,
      faceoffWinPct: 0.41841,
      gameWinningGoals: 0,
      gamesPlayed: 16,
      goals: 6,
      lastName: "Mittelstadt",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8479999,
      plusMinus: -10,
      points: 16,
      pointsPerGame: 1.0,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 8,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.15384,
      shootsCatches: "L",
      shots: 39,
      skaterFullName: "Casey Mittelstadt",
      teamAbbrevs: "COL",
      timeOnIcePerGame: 1191.75,
    },
    {
      assists: 13,
      evGoals: 3,
      evPoints: 11,
      faceoffWinPct: null,
      gameWinningGoals: 1,
      gamesPlayed: 14,
      goals: 3,
      lastName: "Hughes",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8480800,
      plusMinus: 5,
      points: 16,
      pointsPerGame: 1.14285,
      positionCode: "D",
      ppGoals: 0,
      ppPoints: 5,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.05882,
      shootsCatches: "L",
      shots: 51,
      skaterFullName: "Quinn Hughes",
      teamAbbrevs: "VAN",
      timeOnIcePerGame: 1487.5,
    },
    {
      assists: 7,
      evGoals: 5,
      evPoints: 9,
      faceoffWinPct: 0.55882,
      gameWinningGoals: 4,
      gamesPlayed: 15,
      goals: 9,
      lastName: "Boldy",
      otGoals: 1,
      penaltyMinutes: 6,
      playerId: 8481557,
      plusMinus: 5,
      points: 16,
      pointsPerGame: 1.06666,
      positionCode: "L",
      ppGoals: 4,
      ppPoints: 7,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.16666,
      shootsCatches: "L",
      shots: 54,
      skaterFullName: "Matt Boldy",
      teamAbbrevs: "MIN",
      timeOnIcePerGame: 1160.0666,
    },
    {
      assists: 6,
      evGoals: 9,
      evPoints: 14,
      faceoffWinPct: 0.56,
      gameWinningGoals: 2,
      gamesPlayed: 14,
      goals: 10,
      lastName: "McMichael",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8481580,
      plusMinus: 8,
      points: 16,
      pointsPerGame: 1.14285,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 1,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 1,
      shootingPct: 0.22727,
      shootsCatches: "L",
      shots: 44,
      skaterFullName: "Connor McMichael",
      teamAbbrevs: "WSH",
      timeOnIcePerGame: 1021.2857,
    },
    {
      assists: 6,
      evGoals: 6,
      evPoints: 11,
      faceoffWinPct: 0.46039,
      gameWinningGoals: 1,
      gamesPlayed: 15,
      goals: 9,
      lastName: "Bennett",
      otGoals: 0,
      penaltyMinutes: 16,
      playerId: 8477935,
      plusMinus: -1,
      points: 15,
      pointsPerGame: 1.0,
      positionCode: "C",
      ppGoals: 3,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.19148,
      shootsCatches: "L",
      shots: 47,
      skaterFullName: "Sam Bennett",
      teamAbbrevs: "FLA",
      timeOnIcePerGame: 1034.4,
    },
    {
      assists: 8,
      evGoals: 6,
      evPoints: 13,
      faceoffWinPct: 0.33333,
      gameWinningGoals: 0,
      gamesPlayed: 14,
      goals: 7,
      lastName: "Hagel",
      otGoals: 0,
      penaltyMinutes: 12,
      playerId: 8479542,
      plusMinus: 3,
      points: 15,
      pointsPerGame: 1.07142,
      positionCode: "L",
      ppGoals: 0,
      ppPoints: 1,
      seasonId: 20242025,
      shGoals: 1,
      shPoints: 1,
      shootingPct: 0.21212,
      shootsCatches: "L",
      shots: 33,
      skaterFullName: "Brandon Hagel",
      teamAbbrevs: "TBL",
      timeOnIcePerGame: 1225.1428,
    },
    {
      assists: 9,
      evGoals: 3,
      evPoints: 9,
      faceoffWinPct: 0.66666,
      gameWinningGoals: 1,
      gamesPlayed: 15,
      goals: 6,
      lastName: "Batherson",
      otGoals: 0,
      penaltyMinutes: 8,
      playerId: 8480208,
      plusMinus: 0,
      points: 15,
      pointsPerGame: 1.0,
      positionCode: "R",
      ppGoals: 3,
      ppPoints: 6,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.17647,
      shootsCatches: "R",
      shots: 34,
      skaterFullName: "Drake Batherson",
      teamAbbrevs: "OTT",
      timeOnIcePerGame: 1059.0666,
    },
    {
      assists: 9,
      evGoals: 6,
      evPoints: 11,
      faceoffWinPct: 0.46153,
      gameWinningGoals: 0,
      gamesPlayed: 15,
      goals: 6,
      lastName: "Marchenko",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8480893,
      plusMinus: 2,
      points: 15,
      pointsPerGame: 1.0,
      positionCode: "R",
      ppGoals: 0,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.16666,
      shootsCatches: "R",
      shots: 36,
      skaterFullName: "Kirill Marchenko",
      teamAbbrevs: "CBJ",
      timeOnIcePerGame: 1102.2666,
    },
    {
      assists: 6,
      evGoals: 8,
      evPoints: 13,
      faceoffWinPct: 0.3,
      gameWinningGoals: 2,
      gamesPlayed: 17,
      goals: 9,
      lastName: "Laferriere",
      otGoals: 0,
      penaltyMinutes: 4,
      playerId: 8482155,
      plusMinus: 10,
      points: 15,
      pointsPerGame: 0.88235,
      positionCode: "R",
      ppGoals: 1,
      ppPoints: 2,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.225,
      shootsCatches: "R",
      shots: 40,
      skaterFullName: "Alex Laferriere",
      teamAbbrevs: "LAK",
      timeOnIcePerGame: 946.4117,
    },
    {
      assists: 7,
      evGoals: 6,
      evPoints: 12,
      faceoffWinPct: 0.5,
      gameWinningGoals: 0,
      gamesPlayed: 16,
      goals: 7,
      lastName: "Palmieri",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8475151,
      plusMinus: 2,
      points: 14,
      pointsPerGame: 0.875,
      positionCode: "C",
      ppGoals: 1,
      ppPoints: 2,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.16666,
      shootsCatches: "R",
      shots: 42,
      skaterFullName: "Kyle Palmieri",
      teamAbbrevs: "NYI",
      timeOnIcePerGame: 1102.8125,
    },
    {
      assists: 6,
      evGoals: 5,
      evPoints: 11,
      faceoffWinPct: 0.6,
      gameWinningGoals: 2,
      gamesPlayed: 16,
      goals: 8,
      lastName: "Tavares",
      otGoals: 0,
      penaltyMinutes: 8,
      playerId: 8475166,
      plusMinus: 2,
      points: 14,
      pointsPerGame: 0.875,
      positionCode: "C",
      ppGoals: 3,
      ppPoints: 3,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.13333,
      shootsCatches: "L",
      shots: 60,
      skaterFullName: "John Tavares",
      teamAbbrevs: "TOR",
      timeOnIcePerGame: 1023.5625,
    },
    {
      assists: 8,
      evGoals: 5,
      evPoints: 10,
      faceoffWinPct: 0.57894,
      gameWinningGoals: 2,
      gamesPlayed: 15,
      goals: 6,
      lastName: "Zuccarello",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8475692,
      plusMinus: 6,
      points: 14,
      pointsPerGame: 0.93333,
      positionCode: "R",
      ppGoals: 1,
      ppPoints: 4,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.20689,
      shootsCatches: "L",
      shots: 29,
      skaterFullName: "Mats Zuccarello",
      teamAbbrevs: "MIN",
      timeOnIcePerGame: 1102.7333,
    },
    {
      assists: 13,
      evGoals: 0,
      evPoints: 8,
      faceoffWinPct: null,
      gameWinningGoals: 0,
      gamesPlayed: 19,
      goals: 1,
      lastName: "Hamilton",
      otGoals: 0,
      penaltyMinutes: 6,
      playerId: 8476462,
      plusMinus: 0,
      points: 14,
      pointsPerGame: 0.73684,
      positionCode: "D",
      ppGoals: 1,
      ppPoints: 6,
      seasonId: 20242025,
      shGoals: 0,
      shPoints: 0,
      shootingPct: 0.01612,
      shootsCatches: "R",
      shots: 62,
      skaterFullName: "Dougie Hamilton",
      teamAbbrevs: "NJD",
      timeOnIcePerGame: 1258.0526,
    },
  ],
  total: 710,
};
