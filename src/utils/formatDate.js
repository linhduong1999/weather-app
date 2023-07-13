export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();

  // Get the day of the week
  const options = { weekday: "long" };
  const dayOfWeek = date.toLocaleDateString("en-US", options);

  // Format the date
  const dateStr = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return { dayOfWeek, dateStr };
};
