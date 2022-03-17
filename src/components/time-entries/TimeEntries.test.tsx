// import { waitFor } from "@testing-library/react";
// import { gql } from "@apollo/client";
// import {Client} from "../../../apollo-client";
// import { NotFoundError } from "../errors/NotFoundError";

// test("if a notFoundError instance is returned after getting a 404", async () => {
//   const mockFetchResponse = Promise.resolve({
//     status: 404,
//   });
//   global.fetch = jest.fn().mockImplementationOnce(() => mockFetchResponse);

//   const { data } = await Client.query({
//     query: gql`
//       query GetTimeEntries {
//         allTimeEntries {
//           id
//           activity
//           client
//           stopTimestamp
//           startTimestamp
//         };
// 			}`,
//   });

//   // const response = data.allTimeEntries;

//   // expect(response).toBeInstanceOf(NotFoundError);
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   waitFor(() =>
//     expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`),
//   );
// });
