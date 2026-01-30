export interface FotmobMatchResponse {
  general: GeneralInfo;
  header: Header;
  nav: string[];
  ongoing: boolean;
  hasPendingVAR: boolean;
  content: Content;
}

// --- General Section ---
export interface GeneralInfo {
  matchId: string;
  matchName: string;
  matchRound: string;
  teamColors: TeamColors;
  leagueId: number;
  leagueName: string;
  leagueRoundName: string;
  parentLeagueId: number;
  countryCode: string;
  homeTeam: TeamBrief;
  awayTeam: TeamBrief;
  coverageLevel: string;
  matchTimeUTC: string;
  matchTimeUTCDate: string;
  started: boolean;
  finished: boolean;
}

export interface TeamColors {
  darkMode: ModeColors;
  lightMode: ModeColors;
  fontDarkMode: ModeColors;
  fontLightMode: ModeColors;
}

export interface ModeColors {
  home: string;
  away: string;
}

export interface TeamBrief {
  name: string;
  id: number;
}

// --- Header Section ---
export interface Header {
  teams: TeamHeaderDetail[];
  status: MatchStatus;
  events: any | null;
}

export interface TeamHeaderDetail {
  name: string;
  id: number;
  score: number;
  imageUrl: string;
  pageUrl: string;
}

export interface MatchStatus {
  utcTime: string;
  numberOfHomeRedCards: number;
  numberOfAwayRedCards: number;
  halfs: Record<string, any>;
  started: boolean;
  cancelled: boolean;
  finished: boolean;
}

// --- Content Section ---
export interface Content {
  matchFacts: MatchFacts;
  liveticker: LiveTicker;
  superlive: SuperLive;
  buzz: any | null;
  stats: any | null;
  playerStats: any | null;
  shotmap: Shotmap;
  weather: Weather;
  lineup: Lineup;
}

export interface MatchFacts {
  matchId: number;
  highlights: any | null;
  playerOfTheMatch: Record<string, any>;
  events: MatchEvents;
  infoBox: InfoBox;
  teamForm: TeamFormMatch[][];
  poll: PollData;
  topPlayers: TopPlayers;
  insights: Insight[];
  topScorers: TopScorers;
  countryCode: string;
  QAData: any[];
  matchInsightsConfig: MatchInsightsConfig;
}

export interface MatchEvents {
  ongoing: boolean;
  events: any[];
  eventTypes: string[];
  penaltyShootoutEvents: any | null;
}

export interface InfoBox {
  legInfo: any | null;
  "Match Date": { utcTime: string; isDateCorrect: boolean };
  Tournament: TournamentInfo;
  Stadium: StadiumInfo;
  Referee: RefereeInfo;
  Attendance: number | null;
}

export interface TournamentInfo {
  id: number;
  parentLeagueId: number;
  link: string;
  leagueName: string;
  roundName: string;
  round: string;
}

export interface StadiumInfo {
  name: string;
  city: string;
  country: string;
  lat: number;
  long: number;
  capacity: number;
  surface: string;
}

export interface RefereeInfo {
  imgUrl: string;
  text: string;
  country: string;
}

export interface TeamFormMatch {
  result: number;
  resultString: string;
  imageUrl: string;
  linkToMatch: string;
  date: { utcTime: string };
  teamPageUrl: string;
  tooltipText: TooltipText;
  score: string;
  home: TeamFormDetail;
  away: TeamFormDetail;
}

export interface TooltipText {
  utcTime: string;
  homeTeam: string;
  homeTeamId: number;
  homeScore: string;
  awayTeam: string;
  awayTeamId: number;
  awayScore: string;
}

export interface TeamFormDetail {
  id: string;
  name: string;
  isOurTeam: boolean;
}

export interface PollData {
  oddspoll: {
    PollName: string;
    MatchId: number;
    HomeTeamId: number;
    AwayTeamId: number;
    HomeTeam: string;
    AwayTeam: string;
    Facts: PollFact[];
  };
  renderToTop: boolean;
}

export interface PollFact {
  OddsType: string;
  DefaultLabel: string;
  TextLabelId: string;
  DefaultTemplate: string;
  TextTemplateId: string;
  StatValues: string[];
  DefaultLabels: string[];
  LabelTemplates: string[];
  Icon: string;
  defaultText: string;
}

export interface Insight {
  type: "team" | "player";
  playerId: number | null;
  teamId: number;
  priority: number;
  defaultText: string;
  localizedTextId: string;
  statValues: StatValue[];
  text: string;
  color: string;
}

export interface StatValue {
  value: number | string;
  name: string | null;
  type: string;
}

export interface TopScorers {
  section: string;
  sectionId: number;
  homePlayer: ScorerPlayer;
  awayPlayer: ScorerPlayer;
  statsOrder: string[];
}

export interface ScorerPlayer {
  playerId: number;
  position: number;
  matchesWithRating: number;
  lastName: string;
  fullName: string;
  stats: ScorerStats;
}

export interface ScorerStats {
  goals: number;
  goalAssist: number;
  ontargetScoringAtt: number;
  motm: number;
  gamesPlayed: number;
  minsPlayed: number;
  minsPlayedGoal: number;
  expectedGoals: number;
  playerRating: number;
}

export interface MatchInsightsConfig {
  hasBettingInsight: boolean;
  urlTemplate: string;
  languages: string[];
  moderatedAt: string;
  moderatedBy: string;
  moderationAction: string;
}

export interface Weather {
  temperature: number;
  windSpeed: number;
  windDirectionCardinal: string;
  iconCode: number;
  relativeHumidity: number;
  precipChance: number;
  precipitation: number;
  snow: number;
  cloudCover: number;
  description: string;
  apiUsed: string;
  lastUpdated: string;
  localizedKey: string;
  defaultTitle: string;
}

// --- Lineup Section ---
export interface Lineup {
  matchId: number;
  lineupType: string;
  source: string;
  availableFilters: string[];
  homeTeam: TeamLineup;
  awayTeam: TeamLineup;
}

export interface TeamLineup {
  id: number;
  name: string;
  formation: string;
  starters: Player[];
  coach: Coach;
  unavailable: UnavailablePlayer[];
  averageStarterAge: number;
  totalStarterMarketValue: number;
}

export interface Player {
  id: number;
  age: number;
  name: string;
  positionId: number;
  usualPlayingPositionId: number;
  shirtNumber: string;
  countryName: string;
  countryCode: string;
  horizontalLayout: LayoutCoords;
  verticalLayout: LayoutCoords;
  marketValue: number;
  performance: PlayerPerformance;
  firstName: string;
  lastName: string;
  rankings: any | null;
}

export interface LayoutCoords {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface PlayerPerformance {
  seasonRating: number;
  seasonGoals?: number;
  seasonAssists?: number;
}

export interface Coach {
  id: number;
  age: number;
  name: string;
  countryName: string;
  countryCode: string;
  firstName: string;
  lastName: string;
  primaryTeamId: number;
  primaryTeamName: string;
  usualPlayingPositionId: any | null;
  isCoach: boolean;
}

export interface UnavailablePlayer {
  id: number;
  age: number;
  name: string;
  positionId: number;
  countryName: string;
  countryCode: string;
  marketValue: number;
  unavailability: {
    injuryId: number;
    type: string;
    expectedReturn: string;
  };
  performance?: PlayerPerformance;
  firstName: string;
  lastName: string;
}

// --- Others ---
export interface LiveTicker {
  langs: string;
  teams: string[];
}

export interface SuperLive {
  superLiveUrl: string;
  showSuperLive: boolean;
}

export interface Shotmap {
  shots: any[];
  Periods: { All: any[] };
}

export interface TopPlayers {
  homeTopPlayers: any[];
  awayTopPlayers: any[];
}
