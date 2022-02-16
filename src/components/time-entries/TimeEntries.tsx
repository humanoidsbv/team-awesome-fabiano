import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/TimeEntry";

import timeEntries from "../../fixtures/time-entries.json";

export const TimeEntries = () => {
  return timeEntries.map((timeEntry) => (
    <Styled.Container>
      <Styled.DateWorkTimeWrapper>
        <Styled.Date>Friday 29-07 (Today)</Styled.Date>
        <Styled.Time>08:00</Styled.Time>
      </Styled.DateWorkTimeWrapper>
      <TimeEntry client={timeEntry.client} />
    </Styled.Container>
  ));
};
