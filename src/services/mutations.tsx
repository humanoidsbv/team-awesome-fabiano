import { gql } from "@apollo/client";

export const CREATE_TIME_ENTRY = gql`
  mutation CreateTimeEntry(
    $activity: String!
    $client: String!
    $startTimestamp: String!
    $stopTimestamp: String!
  ) {
    createTimeEntry(
      activity: $activity
      client: $client
      startTimestamp: $startTimestamp
      stopTimestamp: $stopTimestamp
    ) {
      activity
      client
      id
      startTimestamp
      stopTimestamp
    }
  }
`;

export const REMOVE_TIME_ENTRY = gql`
  mutation RemoveTimeEntry($id: ID!) {
    removeTimeEntry(id: $id) {
      id
      activity
      client
      startTimestamp
      stopTimestamp
    }
  }
`;
