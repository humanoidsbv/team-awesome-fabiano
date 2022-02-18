import React, { useState, useEffect } from "react";

import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/";
import { Button } from "../button/";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = React.useState([]);

  async function getTimeEntries(): Promise<Types.TimeEntry[]> {
    const response = await fetch("http://localhost:3004/time-entries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  function handleClick() {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random() * 1000,
        client: "Humanoids",
        startTimestamp: "2021-09-26T16:00:00.000Z",
        stopTimestamp: "2021-09-26T18:00:00.000Z",
      },
    ]);
  }

  timeEntries.sort(function (a, b) {
    return new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime();
  });

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
      {timeEntries.map((timeEntry, i, array) => {
        const currentDate = formattedEntryDate(timeEntry.startTimestamp);
        const previousDate = formattedEntryDate(array[i - 1]?.startTimestamp);

        return (
          <React.Fragment key={timeEntry.id}>
            {currentDate !== previousDate && (
              <Styled.DateWorkTimeWrapper>
                <Styled.Date>{formattedEntryDate(timeEntry.startTimestamp)}</Styled.Date>
              </Styled.DateWorkTimeWrapper>
            )}
            <TimeEntry {...timeEntry} />
          </React.Fragment>
        );
      })}
      <Button label="Add new entry" style="secondary" onClick={handleClick} />
    </Styled.Container>
  );
};
