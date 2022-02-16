import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/TimeEntry";

interface TimeEntriesProps {
  id: number;
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntries = () => {
  return (
    <Styled.Container>
      <Styled.DateWorkTimeWrapper>
        <Styled.Date>Friday 29-07 (Today)</Styled.Date>
        <Styled.Time>08:00</Styled.Time>
      </Styled.DateWorkTimeWrapper>
      <TimeEntry />
    </Styled.Container>
  );
};
