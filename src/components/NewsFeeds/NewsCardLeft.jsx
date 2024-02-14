import getDate from "../../utils/getDate";
import clockIcon from "../../assets/icons/clock.svg";

const NewsCardLeft = ({ news, index }) => {
  const { author, url, title, description, urlToImage, publishedAt } =
    news;
  return (
    <>
      {index === 0 && (
        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href={url}>
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">
            {description}
            </p>
            <div className="mt-5 text-base flex gap-1 text-[#5C5955]">
              <img className="w-[16px]" src={clockIcon} alt="" />
              {getDate(publishedAt)}
            </div>
          </div>

          {urlToImage && (
            <div className="col-span-12 lg:col-span-8">
              <img className="w-full" src={urlToImage} alt="thumb" />
              <p className="mt-5 text-base text-[#5C5955]">
                {author && `Illustration: ${author}`}
              </p>
            </div>
          )}
        </div>
      )}
      {index === 1 && (
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
          <div className="col-span-12 md:col-span-6">
            <a href={url}>
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{description}
            </p>
            <div className="mt-5 text-base flex gap-1 text-[#5C5955]">
              <img className="w-[16px]" src={clockIcon} alt="" />
              {getDate(publishedAt)}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img className="w-full" src={urlToImage} alt="thumb" />
          </div>
        </div>
      )}
      {index > 1 && (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="col-span-12 md:col-span-4">
            <a href={url}>
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{description}
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

export default NewsCardLeft;
