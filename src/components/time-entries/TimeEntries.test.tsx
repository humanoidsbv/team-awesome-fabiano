import { waitFor } from "@testing-library/react";
import { getTimeEntries } from "../../services/time-entries-api";
import { NotFoundError } from "../errors/NotFoundError";

test("if a notFoundError instance is returned after getting a 404", async () => {
  const mockFetchResponse = Promise.resolve({
    status: 404,
  });
  global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

  const response = await getTimeEntries();

  expect(response).toBeInstanceOf(NotFoundError);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  waitFor(() =>
    expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`),
  );
});
