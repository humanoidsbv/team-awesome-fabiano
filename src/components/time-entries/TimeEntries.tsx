import { useState } from "react";

import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/TimeEntry";
import { Button } from "../button/Button";

import importedTimeEntries from "../../fixtures/time-entries.json";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(importedTimeEntries);

  timeEntries.sort(function (a, b) {
    return new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime();
  });

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

  const formattedEntryDate = (date: string) => {
    const formattedDate = new Date(date);

    return formattedDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Styled.Container>
      {timeEntries.map((timeEntry) => (
        <>
          <Styled.DateWorkTimeWrapper>
            <Styled.Date>{formattedEntryDate(timeEntry.startTimestamp)} (Today)</Styled.Date>
            <Styled.Time>08:00</Styled.Time>
          </Styled.DateWorkTimeWrapper>
          <TimeEntry {...timeEntry} key={timeEntry.id} />
        </>
      ))}
      <Button label="Add new entry" style="secondary" onClick={handleClick} />
    </Styled.Container>
  );
};
