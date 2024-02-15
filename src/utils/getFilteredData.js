const getFilteredData = (data) => {
  //shortByDate(latest first)
  let sortByDate = [...data];
  sortByDate.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  //News that have content and a image will be at first
  let newsAtFirst = sortByDate.filter(
    (item) => item.content && item.urlToImage
  );
  //News that don't have content or a image will be at last
  let newsAtLast = sortByDate.filter(
    (item) => !(item.content || item.urlToImage)
  );
  return [...newsAtFirst, ...newsAtLast];
};
export default getFilteredData;
