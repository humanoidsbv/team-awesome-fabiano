import React, { useEffect, useState } from "react";

import * as Styled from "./TimeEntries.styled";
import * as Types from "./TimeEntries.types";

import { TimeEntry } from "../time-entry/";
import { Button } from "../button/";
import { NotFoundError } from "../errors/NotFoundError";
import { Modal } from "../modal";
import { SecondaryHeader } from "../secondary-header";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

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

  function handleClick(newTimeEntry) {
    setTimeEntries([...timeEntries, newTimeEntry]);
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
  console.log(timeEntries);
  return (
    <div>
      <SecondaryHeader
        title="Timesheets"
        subtitle="12 Entries"
        buttonLabel="New time entry"
        buttonKind="primary"
        buttonOnClick={() => setIsModalActive(true)}
        buttonIcon={true}
      />
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
        <Modal
          isActive={isModalActive}
          onClose={() => setIsModalActive(false)}
          addButtonOnClick={handleClick}
        />
      </Styled.Container>
    </div>
  );
};
