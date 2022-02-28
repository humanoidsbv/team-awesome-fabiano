import { NotFoundError } from "../components/errors/NotFoundError";
import * as Types from "../components/time-entries/TimeEntries.types";

export async function getTimeEntries(): Promise<Types.TimeEntryProps[]> {
  return fetch("http://localhost:3004/time-entries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response);
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}

export async function addTimeEntry(newTimeEntry: Types.TimeEntryProps) {
  const response = await fetch("http://localhost:3004/time-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  });
  return response.json();
}

export async function removeTimeEntry(id: number) {
  const response = await fetch("http://localhost:3004/time-entries/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
