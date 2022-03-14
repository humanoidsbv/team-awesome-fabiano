import { waitFor } from "@testing-library/react";
import { addMemberEntry } from "../../services/team-members-api";

const mockedNewTeamMember = {
  firstName: "Enzo",
  lastName: "Ferrari",
  emailAddress: "enzo@ferrari.nl",
  label: "Founder of a pretty well-known car manufacturer",
  client: "Humanoids BV",
  role: "Designer",
  startingDate: "2022-02-24",
  id: 20349203598,
};

test("if a new team member is added to the server", async () => {
  const mockFetchResponse = Promise.resolve({
    json: () => Promise.resolve(mockedNewTeamMember),
  });

  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  const response = addMemberEntry(mockedNewTeamMember);

  expect(response).toEqual(mockFetchResponse);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  waitFor(() =>
    expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`),
  );
});
