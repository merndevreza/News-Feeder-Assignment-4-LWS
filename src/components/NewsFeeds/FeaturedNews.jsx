import { useContext } from "react";
import { NewsContext } from "../../contexts";
import NewsCardLeft from "./NewsCardLeft";
import NewsCardRight from "./NewsCardRight";

const FeaturedNews = () => {
  const { newsData } = useContext(NewsContext);
  const numberOfRow = Math.round(newsData.length / 6);
  const leftPart = newsData.slice(0, 3 * numberOfRow);
  const rightPart = newsData.slice(3 * numberOfRow + 1, -1);
  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {leftPart.map((news, index) => (
          <NewsCardLeft
            key={news.title}
            news={news}
            index={index} 
          />
        ))}
      </div>

      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {rightPart.map((news, index) => (
            <NewsCardRight
              key={news.title}
              news={news}
              index={index} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedNews;
