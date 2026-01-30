import React from "react";
import type { LeagueMatchItem } from "../../types/apiResponses/leagueMatches";
import { COLORS } from "../../theme/colors";
import MatchStatusCircle from "./MatchStatusCircle";
import { useNavigate } from "react-router-dom";

interface LMatchItemProps {
  match: LeagueMatchItem;
}

export default function LMatchItem({ match }: LMatchItemProps) {
  const navigate = useNavigate();

  function getCenterInfo() {
    if (match.status.ongoing || match.status.finished) {
      return match.status.scoreStr;
    } else if (!match.status.started) {
      const matchTime = new Date(match.status.utcTime);
      return `${
        matchTime.getHours() < 10
          ? "0" + matchTime.getHours()
          : matchTime.getHours()
      }:${
        matchTime.getMinutes() < 10
          ? "0" + matchTime.getMinutes()
          : matchTime.getMinutes()
      }`;
    }
  }

  return (
    <div
      onClick={() => {
        navigate(`matchDetails?id=${match.id}`);
      }}
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50px 1fr 50px",
        alignItems: "center",
        borderTop: `1px solid ${COLORS.dark}`,
        padding: "8px 0",
      }}
    >
      <MatchStatusCircle match={match} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 30px 50px 30px 1fr",
          alignItems: "center",
          textAlign: "center",
          gap: "10px",
          fontSize: "13px",
          padding: "15px",
        }}
      >
        <span style={{ fontWeight: 100, textAlign: "end" }}>
          {match.home.name}
        </span>
        <img
          src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_xsmall.png`}
          height={22}
        />
        <span
          style={{ color: match.status.started ? COLORS.white : COLORS.gray }}
        >
          {getCenterInfo()}
        </span>
        <img
          src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_xsmall.png`}
          height={22}
        />
        <span style={{ fontWeight: 100, textAlign: "start" }}>
          {match.away.name}
        </span>
      </div>
      <div></div>
    </div>
  );
}
