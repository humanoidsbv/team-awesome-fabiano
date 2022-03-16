import React, { useContext } from "react";

import { useMutation } from "@apollo/client";
import * as Styled from "./TimeEntry.styled";
import * as Types from "../time-entries/TimeEntries.types";

import TrashBinIcon from "../../../public/icons/trash-bin.svg";
import { StoreContext } from "../context-provider";
import { REMOVE_TIME_ENTRY } from "../../services/mutations";

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

  const [deleteTimeEntry] = useMutation(REMOVE_TIME_ENTRY);

  const handleDelete = async () => {
    await deleteTimeEntry({
      variables: {
        id,
      },
    });

    setTimeEntries((timeEntries: Types.TimeEntryProps[]) =>
      timeEntries.filter((entry) => entry.id !== id),
    );
  };

  return (
    <Styled.TimeEntry>
      <Styled.LocationHoursWrapper>
        <Styled.WorkLocation>{client}</Styled.WorkLocation>
        <Styled.TotalWorkHours>
          <Styled.WorkHours>{`${formattedStartTime} - ${formattedEndTime}`}</Styled.WorkHours>
          <Styled.WorkTime>{formattedWorkHours}</Styled.WorkTime>
        </Styled.TotalWorkHours>
      </Styled.LocationHoursWrapper>
      <Styled.TrashButton
        // eslint-disable-next-line react/jsx-no-bind
        onClick={handleDelete}
      >
        <TrashBinIcon />
      </Styled.TrashButton>
    </Styled.TimeEntry>
  );
};
