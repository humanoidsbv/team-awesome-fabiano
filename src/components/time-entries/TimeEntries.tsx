import React, { useEffect, useState } from "react";

import * as Styled from "./TimeEntries.styled";
import * as Types from "./TimeEntries.types";

import { TimeEntry } from "../time-entry/";
import { Button } from "../button/";
import { NotFoundError } from "../errors/NotFoundError";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = React.useState([]);

  async function getTimeEntries(): Promise<Types.TimeEntry[]> {
    return fetch("http://localhost:3004/time-entries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new NotFoundError(response);
        }
        return response;
      })
      .then((response) => response.json())
      .catch((error) => error);
  }

  async function fetchTimeEntries() {
    const timeEntriesFetched = await getTimeEntries();

    if (timeEntriesFetched instanceof NotFoundError) {
      return;
    }

    setTimeEntries(timeEntriesFetched);
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  function handleClick() {
    setTimeEntries([
      ...timeEntries,
      {
        client: "Humanoids",
        id: Math.random() * 1000,
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
      <Button label="Add new entry" kind="secondary" onClick={handleClick} icon={true} />
    </Styled.Container>
  );
};
