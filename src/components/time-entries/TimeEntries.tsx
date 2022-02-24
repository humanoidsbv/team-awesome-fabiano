import React, { useState } from "react";

import * as Styled from "./TimeEntries.styled";

import { TimeEntry } from "../time-entry/";
import { Modal } from "../modal";
import { SecondaryHeader } from "../secondary-header";
import { addTimeEntry } from "../../services/time-entries-api";

export const TimeEntries = (props) => {
  const [timeEntries, setTimeEntries] = useState(props.timeEntries);
  const [isModalActive, setIsModalActive] = useState(false);

  function handleClick(newTimeEntry) {
    addTimeEntry(newTimeEntry);
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
          handleAddButtonClick={handleClick}
        />
      </Styled.Container>
    </div>
  );
};
