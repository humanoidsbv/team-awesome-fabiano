export const addTimeEntry = async (newTimeEntry: TimeEntry) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  });
  return response.json();
};
