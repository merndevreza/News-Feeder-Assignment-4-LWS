import { useState } from "react";
import getDate from "../../utils/getDate";
import NewsModal from "./NewsModal";

const NewsCardLeft = ({ news, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { author, title, description, urlToImage, publishedAt } = news;
  return (
    <>
      {index === 0 && (
        <>
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
              <a className="cursor-pointer"  onClick={() => setIsModalOpen(true)}>
                <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                  {title}
                </h3>
              </a>
              <p className="text-base text-[#5C5955] dark:text-[#959595]">{description}</p>
              <p className="mt-5 text-base  text-[#5C5955] dark:text-[#959595]">
                {getDate(publishedAt)}
              </p>
            </div>

            {urlToImage && (
              <div className="col-span-12 lg:col-span-8">
                <img className="w-full" src={urlToImage} alt="thumb" />
                <p className="mt-5 text-base text-[#5C5955] dark:text-[#959595]">
                  {author && `Illustration: ${author}`}
                </p>
              </div>
            )}
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
      {index === 1 && (
        <>
          <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
            <div className="col-span-12 md:col-span-6">
              <a className="cursor-pointer"   onClick={() => setIsModalOpen(true)}>
                <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                  {title}
                </h3>
              </a>
              <p className="text-base text-[#5C5955] dark:text-[#959595]">{description}</p>
              <p className="mt-5 text-base  text-[#5C5955] dark:text-[#959595]">
                {getDate(publishedAt)}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <img className="w-full" src={urlToImage} alt="thumb" />
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
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="col-span-12 md:col-span-4">
            <a className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
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
    </>
  );
};

export default NewsCardLeft;
