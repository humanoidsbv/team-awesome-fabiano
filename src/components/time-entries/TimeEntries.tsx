import { useState } from "react";

import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/TimeEntry";
import { Button } from "../button/Button";

import importedTimeEntries from "../../fixtures/time-entries.json";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(importedTimeEntries);

  function handleClick() {
    setTimeEntries([
      ...timeEntries,
      {
        id: 0.8524250995148188,
        client: "Humanoids",
        startTimestamp: "2019-09-26T16:00:00.000Z",
        stopTimestamp: "2019-09-26T18:00:00.000Z",
      },
    ]);
  }
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const dateString = currentDay + " " + currentDayOfMonth + "-" + currentMonth;

  return (
    <Styled.Container>
      <Styled.DateWorkTimeWrapper>
        <Styled.Date>{dateString} (Today)</Styled.Date>
        <Styled.Time>08:00</Styled.Time>
      </Styled.DateWorkTimeWrapper>
      {timeEntries.map((timeEntry) => (
        <TimeEntry {...timeEntry} key={timeEntry.id} />
      ))}
      <Button label="Add new entry" style="secondary" onClick={handleClick} />
    </Styled.Container>
  );
};
