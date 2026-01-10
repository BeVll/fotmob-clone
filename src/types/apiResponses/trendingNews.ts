export interface TrendingNewsItem {
  id: string;
  imageUrl: string;
  title: string;
  gmtTime: string;
  sourceStr: string;
  sourceIconUrl: string;
  page: {
    url: string;
  };
}
