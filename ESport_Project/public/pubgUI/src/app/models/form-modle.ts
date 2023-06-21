export interface Players {
    p1Name: string;
    p1Role: string;
    p1Picture: string;
    p2Name: string;
    p2Role: string;
    p2Picture: string;
    p3Name: string;
    p3Role: string;
    p3Picture: string;
    p4Name: string;
    p4Role: string;
    p4Picture: string;
  }
  
  export interface TeamForm {
    firstName: string;
    lastName: string;
    bestMomentClip: string;
    descriptionClip: string;
    players: Players[];
    teamLogo: string;
  }