export type Player = {
  id: number;
  name: string;
  points: number;
  goals: number;
  assists: number;
  timeOnIce: number;
  fights: number;
  team?: string;
  gameLog?: Game[];
};

export type Game = {
  gameId: number;
  gameDate: Date;
  goalsInGame: number;
  assistsInGame: number;
  opponentName: string;
  goalsAccumulated: number;
  assistsAccumulated: number;
  plusMinus?: number;
  powerPlayGoals?: number;
  powerPlayPoints?: number;
  gameWinningGoals?: number;
  otGoals?: number;
  shots?: number;
  shifts?: number;
  shorthandedGoals?: number;
  shorthandedPoints?: number;
  opponentAbbrev?: string;
  pim?: number;
  toi?: number;
};

export type Team = {
  id: number;
  name: string;
  location: string;
  players: Player[];
  salaryUsed: number;
};

export type PlayerPlot = Player & {
  colorFill: string;
  colorStroke: string;
};

export const scatterAxisValues: Record<string, string> = {
  points: "Points",
  goals: "Goals",
  assists: "Assists",
  timeOnIce: "Time on Ice",
  fights: "Fights",
};

export type ScatterAxisValuesKeys = keyof typeof scatterAxisValues;
