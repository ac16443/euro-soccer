export interface Country {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: string | number;
}

export interface Standings {
  response: any;
  id: number;
  name: string;
  logo: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  goalsDiff: number;
  points: number;
}
