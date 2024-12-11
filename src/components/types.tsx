export type Player = {
  id: number;
  name: string;
  points: number;
  goals: number;
  assists: number;
  timeOnIce: number;
  fights: number;
};

export const scatterAxisValues: Record<string, string> = {
  points: "Points",
  goals: "Goals",
  assists: "Assists",
  timeOnIce: "Time on Ice",
  fights: "Fights",
};
