export interface pmpl {
  _id:string;
  title: string;
  prize: string;
  region: string;
  teams: Team[];
}

export interface Team {
  _id:string;
  name: string;
  country: string;
  Best_Moment_clip: string;
  Description_clip: string;
  teamLogo:string
  players: Player[];
}

export interface Player {
  name: string;
  picture: string;
  role: string;
}
  