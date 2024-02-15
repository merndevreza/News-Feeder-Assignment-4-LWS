import { useContext } from "react";
import { NewsContext } from "../../contexts";
import NewsCardLeft from "./NewsCardLeft";
import NewsCardRight from "./NewsCardRight";

const FeaturedNews = () => {
  const { newsData } = useContext(NewsContext);
  let numberOfRow = 0;
  let leftPart = [];
  let rightPart = [];
  if (newsData.length <= 3) {
    leftPart = newsData;
  } else if (newsData.length > 3 && newsData.length<=6) {
    leftPart = newsData.slice(0, 3);
    rightPart = newsData.slice(3);
  }else if (newsData.length > 6) {
    numberOfRow = Math.round(newsData.length / 6);
    leftPart = newsData.slice(0, 3*numberOfRow);
    rightPart = newsData.slice(3*numberOfRow);
  } 
  return (
    <>
      {newsData.length <1 ? (
        <p>No Data Found</p>
      ) : (
        <>
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {leftPart.map((news, index) => (
              <NewsCardLeft key={`${news.title}_${index}`} news={news} index={index} />
            ))}
          </div>
          {rightPart.length > 0 && (
            <div className="col-span-12 self-start xl:col-span-4">
              <div className="space-y-6 divide-y-2 divide-[#D5D1C9] dark:divide-[#89898a]">
                {rightPart.map((news, index) => (
                  <NewsCardRight key={`${news.title}_${index}`}  news={news} index={index} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default FeaturedNews;
