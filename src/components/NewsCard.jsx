import { newsData } from "@/data/newsData";
import { HoverEffect } from "./ui/card-hover-effect";

const NewsCard = () => {
  const mainItem = newsData[0];

  const firstRowItems = newsData.slice(1, 4);
  const secondRowItems = newsData.slice(4);

  return (
    <HoverEffect
      mainItem={mainItem}
      firstRowItems={firstRowItems}
      secondRowItems={secondRowItems}
    />
  );
};

export default NewsCard;
