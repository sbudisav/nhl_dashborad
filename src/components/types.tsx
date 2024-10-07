export interface Player {
  id: number;
  name: string;
  points: number;
  assists: number;
  timeOnIce: number;
  fights: number;
}

export const fakePlayers: Player[] = [
  {
    id: 1,
    name: "Player 1",
    points: 50,
    assists: 30,
    timeOnIce: 20,
    fights: 5,
  },
  {
    id: 2,
    name: "Player 2",
    points: 70,
    assists: 40,
    timeOnIce: 25,
    fights: 2,
  },
  {
    id: 3,
    name: "Player 3",
    points: 40,
    assists: 20,
    timeOnIce: 18,
    fights: 3,
  },
  {
    id: 4,
    name: "Player 4",
    points: 60,
    assists: 35,
    timeOnIce: 22,
    fights: 1,
  },
  {
    id: 5,
    name: "Player 5",
    points: 80,
    assists: 50,
    timeOnIce: 30,
    fights: 0,
  },
  {
    id: 6,
    name: "Player 6",
    points: 45,
    assists: 25,
    timeOnIce: 19,
    fights: 6,
  },
];
