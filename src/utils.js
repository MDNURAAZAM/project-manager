export const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
};

export const formatDate = (date) => {
  let inputDate = new Date(date);

  // Month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, month, and year
  let day = inputDate.getDate();
  let month = monthNames[inputDate.getMonth()];
  let year = inputDate.getFullYear();

  // Format the output
  let formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};

export const getNextId = (items) => {
  const maxId = items.reduce((max, obj) => (obj.id > max ? obj.id : max), 0);
  return maxId + 1;
};

export const getTasks = (tasks, category) => {
  return tasks?.filter((task) => task.category === category);
};

export const sortTasks = (tasks, isAscending) => {
  return [...tasks]?.sort((a, b) =>
    isAscending
      ? new Date(a?.date) - new Date(b?.date)
      : new Date(b?.date) - new Date(a?.date)
  );
};
