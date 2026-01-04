export interface AllLeaguesResponse {
  countries: [];
  international: [];
  popular: LeagueItem[];
}

export interface LeagueItem {
  ccode: string;
  id: number;
  localizedName: string;
  name: string;
  pageUrl: string;
}
