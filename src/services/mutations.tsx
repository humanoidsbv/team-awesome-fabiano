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
    }
  }
`;

export const CREATE_TEAM_MEMBER = gql`
  mutation CreateTeamMember(
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $label: String!
    $client: String!
    $role: String!
    $startingDate: String!
  ) {
    createTeamMember(
      firstName: $firstName
      lastName: $lastName
      emailAddress: $emailAddress
      label: $label
      client: $client
      role: $role
      startingDate: $startingDate
    ) {
      id
      firstName
      lastName
      emailAddress
      label
      client
      role
      startingDate
    }
  }
`;
