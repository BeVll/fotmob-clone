import NewsCard from "../cards/NewsCard";
import TopLeaguesCard from "../cards/TopLeaguesCard";
import LeagueMatchesList from "../matches/LeagueMatchesList";

export default function HomePage() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1220px",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gap: "20px",
        marginTop: "1px",
      }}
    >
      <div className="leftContent" style={{ width: "100%" }}>
        <TopLeaguesCard />
      </div>
      <div className="middleContent" style={{ width: "100%" }}>
        <LeagueMatchesList />
      </div>
      <div className="rightContent" style={{ width: "100%" }}>
        <NewsCard />
      </div>
    </div>
  );
}
