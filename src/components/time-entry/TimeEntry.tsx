import * as Styled from "./TimeEntry.styled";
import * as Types from "../time-entries/TimeEntries.types";

import TrashBinIcon from "../../../public/icons/trash-bin.svg";
import React, { useContext } from "react";
import { removeTimeEntry } from "../../services/time-entries-api";
import { StoreContext } from "../context-provider";

export const TimeEntry = ({ id, client, startTimestamp, stopTimestamp }: Types.TimeEntryProps) => {
  const startTime = new Date(startTimestamp);
  const endTime = new Date(stopTimestamp);

  const state = useContext(StoreContext);
  const [, setTimeEntries] = state.timeEntries;

  const timeFormatter = (time: Date) =>
    time.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formattedStartTime = timeFormatter(startTime);
  const formattedEndTime = timeFormatter(endTime);
  const workHours = new Date(endTime.getTime() - startTime.getTime() - 3600000);
  const formattedWorkHours = timeFormatter(workHours);

  async function handleDelete() {
    setTimeEntries((timeEntries: Types.TimeEntryProps[]) =>
      timeEntries.filter((entry) => entry.id !== id),
    );
    removeTimeEntry(id as number);
  }

  return (
    <Styled.TimeEntry>
      <Styled.LocationHoursWrapper>
        <Styled.WorkLocation>{client}</Styled.WorkLocation>
        <Styled.TotalWorkHours>
          <Styled.WorkHours>{`${formattedStartTime} - ${formattedEndTime}`}</Styled.WorkHours>
          <Styled.WorkTime>{formattedWorkHours}</Styled.WorkTime>
        </Styled.TotalWorkHours>
      </Styled.LocationHoursWrapper>
      <Styled.TrashButton onClick={handleDelete}>
        <TrashBinIcon />
      </Styled.TrashButton>
    </Styled.TimeEntry>
  );
};
