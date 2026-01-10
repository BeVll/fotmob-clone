import React, { useEffect, useState } from "react";
import CardContainer from "../ui/CardContainer";
import axios from "axios";
import type { TrendingNewsItem } from "../../types/apiResponses/trendingNews";
import NewsItem from "../news/NewsItem";

export default function NewsCard() {
  const [news, setNews] = useState<TrendingNewsItem[]>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<TrendingNewsItem[]>(
          "https://www.fotmob.com/api/trendingnews?lang=en-GB&ccode3=POL"
        );

        setNews(response.data);
      } catch (error) {
        console.error("Failed to fetch leagues", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <CardContainer title="News">
      {news?.map((item, index) => (
        <NewsItem key={`news-${index}`} isLarge={index == 0} item={item} />
      ))}
      <a
        href="https://www.fotmob.com/en-GB/news"
        className="linkUnderlined"
        style={{
          padding: "16px 0px",
          width: "100%",
          display: "flex",
          fontSize: "12px",
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        See more
      </a>
    </CardContainer>
  );
}
