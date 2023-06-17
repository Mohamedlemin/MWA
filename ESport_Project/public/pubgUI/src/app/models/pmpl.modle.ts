export interface pmpl {
  _id: string;
  title: string;
  prize: string;
  region: string;
  teams: Team[];
}

export interface Team {
  name: string;
  country: string;
  Best_Moment_clip: string;
  Description_clip: string;
  players: Player[];
}

export interface Player {
  name: string;
  country: string;
  role: string;
  _id: string;
}
  