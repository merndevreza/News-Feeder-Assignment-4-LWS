const getDate = (dateTimeString, type) => {
  const date = new Date(dateTimeString);
  let options;
  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else {
    options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
    };
  }
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
export default getDate;
