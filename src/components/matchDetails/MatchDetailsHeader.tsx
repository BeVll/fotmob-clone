import React, { useEffect, useState } from "react";
import { COLORS } from "../../theme/colors";
import MatchHeaderInfoItem from "./MatchHeaderInfoItem";
import Moment from "moment";
import { Calendar, LandPlot, Volleyball } from "lucide-react";
import type { Header } from "../../types/apiResponses/matchDetails";

interface MatchDetailsHeaderProps {
  stadiumName: string;
  refereeName: string;
  matchDate: string;
  header: Header;
}

export default function MatchDetailsHeader(props: MatchDetailsHeaderProps) {
  const [timeToMatch, setTimeToMatch] = useState<string>("");

  useEffect(() => {
    const matchDate = new Date(props.matchDate);

    setInterval(() => {
      const currentDate = new Date();

      const timeToMatchInMilliseconds =
        matchDate.getTime() - currentDate.getTime();

      setTimeToMatch(Moment(timeToMatchInMilliseconds).format("HH:mm:ss"));
    }, 1000);
  }, []);

  return (
    <div
      style={{
        color: "white",
        backgroundColor: COLORS.card,
        borderRadius: "16px",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "10px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <MatchHeaderInfoItem
          icon={<Calendar size={16} />}
          title={Moment(props.matchDate).format("ddd DD MMMM, HH:mm")}
        />
        <MatchHeaderInfoItem
          icon={<LandPlot size={16} />}
          title={props.stadiumName}
        />

        <MatchHeaderInfoItem
          icon={<Volleyball size={16} />}
          title={props.refereeName}
        />
      </div>

      <div
        style={{
          padding: "10px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h3>{props.header.teams[0].name}</h3>
        <img style={{ height: "56px" }} src={props.header.teams[0].imageUrl} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "20px" }}>
            {Moment(props.header.status.utcTime).format("HH:mm")}
          </span>
          <span>{timeToMatch}</span>
        </div>
        <img style={{ height: "56px" }} src={props.header.teams[1].imageUrl} />
        <h3>{props.header.teams[1].name}</h3>
      </div>
    </div>
  );
}
