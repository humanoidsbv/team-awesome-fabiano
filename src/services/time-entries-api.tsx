import { NotFoundError } from "../components/errors/NotFoundError";
import * as Types from "../components/time-entries/TimeEntries.types";

export async function getTimeEntries(): Promise<Types.TimeEntryProps[]> {
  return fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-fabiano/time-entries",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError("Did not find time entry");
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}

export async function addTimeEntry(newTimeEntry: Types.TimeEntryProps) {
  const response = await fetch(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-fabiano/time-entries",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTimeEntry),
    },
  );
  return response.json();
}

export async function removeTimeEntry(id: number) {
  const response = await fetch(
    `https://my-json-server.typicode.com/humanoidsbv/team-awesome-fabiano/time-entries/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json();
}

export async function getClients() {
  return fetch("https://my-json-server.typicode.com/humanoidsbv/team-awesome-fabiano/clients", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError("Did not find time entry");
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}
