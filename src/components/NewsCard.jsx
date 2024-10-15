import { newsData } from "@/data/newsData";
import { HoverEffect } from "./ui/card-hover-effect";

const NewsCard = () => {
  const mainItem = newsData[0]; // Main news
  const firstRowItems = newsData.slice(1, 4); // First row of news on the right
  const secondRowItems = newsData.slice(4); // Second row of news on the right

  return (
    <HoverEffect
      mainItem={mainItem}
      firstRowItems={firstRowItems}
      secondRowItems={secondRowItems}
    />
  );
};

export default NewsCard;
