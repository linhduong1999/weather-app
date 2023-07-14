export const formatDate = (dateString) => {
  const date = new Date(dateString);

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

export const isToday = (timestamp) => {
  const today = new Date();
  const targetDate = new Date(timestamp * 1000);
  return today.toDateString() === targetDate.toDateString();
};
