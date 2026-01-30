import React from "react";
import type { LeagueMatchItem } from "../../types/apiResponses/leagueMatches";
import { COLORS } from "../../theme/colors";

export default function MatchStatusCircle({
  match,
}: {
  match: LeagueMatchItem;
}) {
  function getTextColor() {
    if (match.status.ongoing || match.status.cancelled) {
      return COLORS.card;
    } else {
      return COLORS.gray;
    }
  }

  function getBgColor() {
    if (match.status.ongoing) {
      return COLORS.green;
    } else if (match.status.cancelled) {
      return COLORS.red;
    } else if (match.status.cancelled || match.status.started) {
      return COLORS.dark;
    } else {
      return "transparent";
    }
  }

  function getText() {
    if (match.status.ongoing) {
      return match.status.liveTime?.short.replace("‎’‎", "");
    } else if (match.status.finished) {
      return "FT";
    } else if (match.status.cancelled) {
      return "CL";
    } else {
      return "";
    }
  }

  return (
    <div
      style={{
        backgroundColor: getBgColor(),
        alignContent: "center",
        color: getTextColor(),
        textAlign: "center",
        margin: "0 10px",
        fontSize: "12px",
        borderRadius: "35px",
        padding: "4px 2px",
      }}
    >
      {getText()}
    </div>
  );
}
