import React from "react";
import { COLORS } from "../../theme/colors";
import { ChevronUp } from "lucide-react";
import type { LeagueMatchesItem } from "../../types/apiResponses/leagueMatches";
import LMatchItem from "../matches/LMatchItem";

interface LeagueMatchesCardProps {
  league: LeagueMatchesItem;
}

export default function LeagueMatchesCard({ league }: LeagueMatchesCardProps) {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: COLORS.card,
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",

          backgroundColor: COLORS.dark,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "15px",
          }}
        >
          <img
            src={
              league.ccode === "INT"
                ? `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${league.primaryId}.png`
                : `https://images.fotmob.com/image_resources/logo/teamlogo/${league.ccode.toLocaleLowerCase()}.png`
            }
            height={16}
          />
          <h5 style={{ fontWeight: 500 }}>{league.name}</h5>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "15px",
          }}
        >
          <ChevronUp size={20} />
        </div>
      </div>
      {league.matches.map((match) => (
        <LMatchItem match={match} />
      ))}
    </div>
  );
}
