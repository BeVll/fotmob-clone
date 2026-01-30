import React, { useEffect, useState } from "react";
import LeagueMatchesCard from "../cards/LeagueMatchesCard";
import axios from "axios";
import type {
  LeagueMatchesItem,
  LeagueMatchesResponse,
} from "../../types/apiResponses/leagueMatches";
import { useSearchParams } from "react-router-dom";
import Moment from "moment";

export default function LeagueMatchesList() {
  const [leagueMatches, setLeagueMatches] = useState<LeagueMatchesItem[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let date = searchParams.get("date");

    if (!date) {
      const currentDate = new Date();
      date = Moment(currentDate).format("YYYYMMDD");
    }

    const getMatches = async () => {
      try {
        const leagueMatchesResponse = await axios.get<LeagueMatchesResponse>(
          `https://www.fotmob.com/api/data/matches?date=${date}&timezone=Europe%2FWarsaw&ccode3=POL`
        );

        setLeagueMatches(leagueMatchesResponse.data.leagues);
      } catch (error) {
        console.log(error);
      }
    };

    getMatches();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {leagueMatches.map((item) => (
        <LeagueMatchesCard key={`league-matches-${item.id}`} league={item} />
      ))}
    </div>
  );
}
