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

// Helper function to format the date
export const getFormattedDate = (date) => {
  const formattedDayOfWeek = formatDate(date).dayOfWeek;
  const formattedDateStr = formatDate(date).dateStr;
  return `${formattedDayOfWeek} ${formattedDateStr}`;
};
