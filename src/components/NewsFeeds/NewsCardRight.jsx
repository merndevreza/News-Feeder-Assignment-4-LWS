import getDate from "../../utils/getDate";
import clockIcon from "../../assets/icons/clock.svg";

const NewsCardRight = ({ news, index }) => {
  const { url, title, description, urlToImage, publishedAt, content } = news;
  return (
    <>
      {index === 0 && (
        <div className="col-span-12 mb-6 md:col-span-8">
          {urlToImage && (
            <img className="w-full" src={urlToImage} alt="thumb" />
          )}
          <div className="col-span-12 mt-6 md:col-span-4">
            <a href={url}>
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">
              {description ? description : content}
            </p>
            <div className="mt-5 text-base flex gap-1 text-[#5C5955]">
              <img className="w-[16px]" src={clockIcon} alt="" />
              {getDate(publishedAt)}
            </div>
          </div>
        </div>
      )}
      {index > 1 && (
        <div className="col-span-12 md:col-span-8">
          <div className="col-span-12 md:col-span-4">
            <a href={url}>
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">
              {description ? description : content}
            </p>
            <div className="mt-5 text-base flex gap-1 text-[#5C5955]">
              <img className="w-[16px]" src={clockIcon} alt="" />
              {getDate(publishedAt)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCardRight;
