import * as Styled from "./TimeEntry.styled";

import TrashBinIcon from "../../../public/icons/trash-bin.svg";

interface TimeEntryProps {
  client: string;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntry = ({ id, client, startTimestamp, stopTimestamp }: TimeEntryProps) => {
  const startTime = new Date(startTimestamp);
  const endTime = new Date(stopTimestamp);

  const timeFormatter = (time: Date) =>
    time.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
    });

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
        <TrashBinIcon />
      </Styled.TrashButton>
    </Styled.TimeEntry>
  );
};
