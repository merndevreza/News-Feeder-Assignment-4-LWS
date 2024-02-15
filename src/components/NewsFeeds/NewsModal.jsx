import getDate from "../../utils/getDate";

const NewsModal = ({ news, setIsModalOpen }) => {
  const { author, url, title, urlToImage, publishedAt, content } = news;
  return (
    <div>
      <img src={urlToImage} alt={title} />
      <h2 className="mb-2.5 text-xl font-bold lg:text-[20px] mt-5">
        <a href={url}>{title}</a>
      </h2>
      <p className="text-md text-[#5C5955] dark:text-[#959595]">{content}</p>
      {author&&<p className="mt-2 text-base text-[#5C5955] dark:text-[#959595]">
        Reporter: {author}
      </p>}
      <p className="mb-5 text-base text-[#5C5955] dark:text-[#959595] font-bold">{getDate(publishedAt)}</p>
      <button
        onClick={() => setIsModalOpen(false)}
        className="px-4 py-2 bg-primary  rounded"
      >
        Close
      </button>
    </div>
  );
};

export default NewsModal;
