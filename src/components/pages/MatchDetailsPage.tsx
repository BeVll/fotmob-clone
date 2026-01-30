import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type {
  FotmobMatchResponse,
  MatchDetailsItem,
} from "../../types/apiResponses/matchDetails";
import axios from "axios";
import CardContainer from "../ui/CardContainer";
import MatchDetailsHeader from "../matchDetails/MatchDetailsHeader";

export default function MatchDetailsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [matchDetails, setMatchDetails] = useState<FotmobMatchResponse | null>(
    null
  );

  useEffect(() => {
    const matchId = searchParams.get("id");
    if (!matchId) return;

    const getMatchDetails = async () => {
      try {
        const matchDetailsResponse = await axios.get<FotmobMatchResponse>(
          `https://www.fotmob.com/api/data/matchDetails?matchId=${matchId}`
        );

        setMatchDetails(matchDetailsResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMatchDetails();
  }, [searchParams]);

  return (
    <div style={{ color: "white", width: "100%" }}>
      {matchDetails && (
        <MatchDetailsHeader
          matchDate={
            matchDetails?.content.matchFacts.infoBox["Match Date"].utcTime
          }
          stadiumName={matchDetails.content.matchFacts.infoBox.Stadium.name}
          refereeName={matchDetails.content.matchFacts.infoBox.Referee.text}
          header={matchDetails.header}
        />
      )}
    </div>
  );
}
