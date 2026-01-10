import React from "react";
import type { TrendingNewsItem } from "../../types/apiResponses/trendingNews";
import { COLORS } from "../../theme/colors";
import { useNavigate } from "react-router";

interface NewsItemProps {
  item: TrendingNewsItem;
  isLarge?: boolean;
}

export default function NewsItem({ item, isLarge = false }: NewsItemProps) {
  const navigate = useNavigate();

  function formatTime(date: string) {
    const dateTime = new Date(date);
    const currentDate = new Date();

    if (dateTime.getDate() == currentDate.getDate()) {
      return `${currentDate.getHours() - dateTime.getHours()} hr ago`;
    } else {
      return `${currentDate.toDateString()}`;
    }
  }

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        height: isLarge ? "auto" : "72px",
        flexDirection: isLarge ? "column" : "row",
        cursor: "pointer",
        borderBottom: `1px solid ${COLORS.dark}`,
      }}
      onClick={() => {
        navigate("https://www.fotmob.com/en-GB/" + item.page.url);
      }}
    >
      <img
        style={{
          height: isLarge ? "auto" : "72px",
          width: isLarge ? "100%" : "72px",
          objectFit: "cover",
          borderRadius: "14px",
        }}
        src={item.imageUrl}
      />
      <div
        style={{
          display: "flex",
          gap: "5px",
          flexDirection: "column",
          height: "100%",
          minHeight: "100%",
          maxHeight: "100%",
          justifyContent: "space-between",
        }}
      >
        <p
          className="linkUnderlined"
          style={{
            fontSize: "13px",
            lineHeight: "16px",
            maxHeight: "48px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word",
          }}
        >
          {item.title}
        </p>
        <div
          style={{
            display: "flex",
            fontSize: "12px",
            gap: "4px",
            fontWeight: 300,
          }}
        >
          <span style={{ color: COLORS.gray }}>{item.sourceStr}</span>
          <span style={{ color: COLORS.gray }}>
            · {formatTime(item.gmtTime)}
          </span>
        </div>
      </div>
    </div>
  );
}
