export interface LeagueMatchesResponse {
  leagues: LeagueMatchesItem[];
}

export interface LeagueMatchesItem {
  ccode: string;
  id: number;
  primaryId: number;
  name: string;
  matches: LeagueMatchItem[];
}

export interface LeagueMatchItem {
  id: number;
  leagueId: number;
  time: string;
  home: {
    id: number;
    score: number;
    name: string;
    longName: string;
  };
  away: {
    id: number;
    score: number;
    name: string;
    longName: string;
  };
  statusId: number;
  tournamentStage: string;

  status: {
    utcTime: string;
    periodLength: number;
    finished: boolean;
    started: boolean;
    cancelled: boolean;
    ongoing?: boolean;
    scoreStr: string;
    awarded?: string;
    liveTime?: {
      short: string;
      shortKey: string;
      long: string;
      longKey: string;
      maxTime: number;
      addedTime: number;
    };

    reason?: {
      short: string;
      shortKey: string;
      long: string;
      longKey: string;
    };
  };
}
