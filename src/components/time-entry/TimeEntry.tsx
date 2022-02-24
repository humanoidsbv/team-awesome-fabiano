import * as Styled from "./TimeEntry.styled";

import TrashBinIcon from "../../../public/icons/trash-bin.svg";
import React from "react";
import { getTimeEntries, removeTimeEntry } from "../../services/time-entries-api";
import { TimeEntries } from "../time-entries";
import { getEntrypointInfo } from "next/dist/build/webpack/plugins/middleware-plugin";

interface TimeEntryProps {
  client: string;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
  setTimeEntries: () => void;
}

export const TimeEntry = ({
  id,
  client,
  startTimestamp,
  stopTimestamp,
  setTimeEntries,
}: TimeEntryProps) => {
  const startTime = new Date(startTimestamp);
  const endTime = new Date(stopTimestamp);

  const timeFormatter = (time: Date) =>
    time.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
    });

  function handleDeleteButtonClick() {
    removeTimeEntry(id);
    setTimeEntries((timeEntries) => timeEntries.filter((entry) => entry.id !== id));
  }

  const formattedStartTime = timeFormatter(startTime);
  const formattedEndTime = timeFormatter(endTime);
  const workHours = new Date(endTime.getTime() - startTime.getTime() - 3600000);
  const formattedWorkHours = timeFormatter(workHours);

  return (
    <Styled.TimeEntry>
      <Styled.LocationHoursWrapper>
        <Styled.WorkLocation>{client}</Styled.WorkLocation>
        <Styled.TotalWorkHours>
          <Styled.WorkHours>{`${formattedStartTime} - ${formattedEndTime}`}</Styled.WorkHours>
          <Styled.WorkTime>{formattedWorkHours}</Styled.WorkTime>
        </Styled.TotalWorkHours>
      </Styled.LocationHoursWrapper>
      <Styled.TrashButton>
        <TrashBinIcon onClick={handleDeleteButtonClick} />
      </Styled.TrashButton>
    </Styled.TimeEntry>
  );
};
