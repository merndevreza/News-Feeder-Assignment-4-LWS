import { useState } from "react";
import getDate from "../../utils/getDate";
import NewsModal from "./NewsModal";

const NewsCardRight = ({ news, index }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, urlToImage, publishedAt } = news;
  return (
    <>
      {index === 0 && (
        <>
          <div className="col-span-12 mb-6 md:col-span-8">
            {urlToImage && (
              <img className="w-full" src={urlToImage} alt="thumb" />
            )}
            <div className="col-span-12 mt-6 md:col-span-4">
              <a
                className="cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {title}
                </h3>
              </a>
              <p className="text-base text-[#5C5955] dark:text-[#959595]">{description}</p>
              <p className="mt-5 text-base text-[#5C5955] dark:text-[#959595]">
                {getDate(publishedAt)}
              </p>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed w-full h-screen left-0 top-0 bg-black bg-opacity-40">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#171923] dark:text-white p-5">
                <NewsModal
                  key={title}
                  news={news}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            </div>
          )}
        </>
      )}
      {index > 1 && (
        <>
          <div className="col-span-12 md:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <a
                className="cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {title}
                </h3>
              </a>
              <p className="text-base text-[#5C5955] dark:text-[#959595]">{description}</p>
              <p className="mt-5 text-base text-[#5C5955] dark:text-[#959595]">
                {getDate(publishedAt)}
              </p>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed w-full h-screen left-0 top-0 bg-black bg-opacity-40">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:dark:bg-[#171923] dark:text-white p-5">
                <NewsModal
                  key={title}
                  news={news}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default NewsCardRight;
