import React, { useEffect, useState } from "react";
import CardContainer from "../ui/CardContainer";
import axios from "axios";
import type { AllLeaguesResponse } from "../../types/apiResponses/allLeagues";

export default function TopLeaguesCard() {
  const [allLeagues, setAllLeagues] = useState<AllLeaguesResponse>();

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get<AllLeaguesResponse>(
          "https://www.fotmob.com/api/data/allLeagues?locale=uk-UA&country=UKR"
        );

        setAllLeagues(response.data);
      } catch (error) {
        console.error("Failed to fetch leagues", error);
      }
    };

    fetchLeagues();
  }, []);

  return (
    <CardContainer title="Top leagues">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {allLeagues?.popular.map((item) => (
          <div
            className="hoverableItem"
            style={{
              padding: "16px 24px",
              display: "flex",
              gap: "16px",

              alignItems: "center",
            }}
          >
            <img
              style={{ width: "16px" }}
              src={`https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${item.id}.png`}
            />
            <span style={{ fontSize: "12px", fontWeight: 300 }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </CardContainer>
  );
}
