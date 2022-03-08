import { NotFoundError } from "../components/errors/NotFoundError";
import * as Types from "../components/member-entries/MemberEntries.types";

export async function getMemberEntries(): Promise<Types.MemberEntryProps[]> {
  return fetch("http://localhost:3004/team-members", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError("Did not find team member entry");
      }
      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}

export async function addMemberEntry(newMemberEntry: Types.MemberEntryProps) {
  const response = await fetch("http://localhost:3004/team-members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMemberEntry),
  });
  return response.json();
}
