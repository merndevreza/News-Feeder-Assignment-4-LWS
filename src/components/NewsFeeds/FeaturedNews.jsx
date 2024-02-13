import { useContext } from "react";
import { NewsContext } from "../../contexts"; 
import NewsCardLeft from "./NewsCardLeft";
import NewsCardRight from "./NewsCardRight";

const FeaturedNews = () => {
  const { newsData } = useContext(NewsContext);
  const leftPart = newsData.slice(0, 9);
  const rightPart = newsData.slice(10, -1);
  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {leftPart.map((news, index) => (
          <NewsCardLeft key={news.title} news={news} index={index} />
        ))}
      </div>

      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {rightPart.map((news, index) => (
          <NewsCardRight key={news.title} news={news} index={index} />
        ))}

        </div>
      </div>
    </>
  );
};

export default FeaturedNews;
