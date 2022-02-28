import React, { useState } from "react";

import * as Styled from "./TimeEntries.styled";
import * as Types from "../time-entries/TimeEntries.types";

import { TimeEntry } from "../time-entry/";
import { Modal } from "../modal";
import { SecondaryHeader } from "../secondary-header";
import { addTimeEntry } from "../../services/time-entries-api";

export const TimeEntries = (props) => {
  const [timeEntries, setTimeEntries] = useState(props.timeEntries);
  const [isModalActive, setIsModalActive] = useState(false);

  async function handleClick(newTimeEntry) {
    const formattedNewEntry = await addTimeEntry(newTimeEntry);
    if (formattedNewEntry) {
      setTimeEntries([...timeEntries, formattedNewEntry]);
    }
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

  const formatDuration = (duration: number) => {
    const hours = Number.parseInt(String(duration / 1000 / 60 / 60)).toString();
    const minutes = Number.parseInt(String((duration / 1000 / 60) % 60)).toString();
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  };

  const getDurationByDay = (isoDate: string, timeEntries: Types.TimeEntryProps[]) => {
    const calculateDuration = ({
      startTimestamp,
      stopTimestamp,
    }: {
      startTimestamp: string;
      stopTimestamp: string;
    }) => {
      return new Date(stopTimestamp).getTime() - new Date(startTimestamp).getTime();
    };

    const duration = timeEntries
      .filter(
        ({ startTimestamp }) =>
          new Date(startTimestamp).toDateString() === new Date(isoDate).toDateString(),
      )
      .reduce((acc, timeEntry) => acc + calculateDuration(timeEntry), 0);

    return formatDuration(duration);
  };

  return (
    <div>
      <SecondaryHeader
        title="Timesheets"
        subtitle={`${timeEntries.length} Entries`}
        buttonLabel="New time entry"
        buttonKind="primary"
        buttonOnClick={() => setIsModalActive(true)}
        buttonIcon={true}
      />
      <Styled.Container>
        {timeEntries.map((timeEntry: Types.TimeEntryProps, i, array) => {
          const currentDate = formattedEntryDate(timeEntry.startTimestamp);
          const previousDate = formattedEntryDate(array[i - 1]?.startTimestamp);

          return (
            <React.Fragment key={timeEntry.id}>
              {currentDate !== previousDate && (
                <Styled.DateWorkTimeWrapper>
                  <Styled.Date>{formattedEntryDate(timeEntry.startTimestamp)}</Styled.Date>
                  <Styled.Date>
                    {getDurationByDay(timeEntry.startTimestamp, timeEntries)}
                  </Styled.Date>
                </Styled.DateWorkTimeWrapper>
              )}
              <TimeEntry {...timeEntry} setTimeEntries={setTimeEntries} />
            </React.Fragment>
          );
        })}
        <Modal
          isActive={isModalActive}
          onClose={() => setIsModalActive(false)}
          handleAddButtonClick={handleClick}
        />
      </Styled.Container>
    </div>
  );
};
