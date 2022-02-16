import * as Styled from "./TimeEntry.styled";

import TrashIcon from "../../../public/icons/trash-bin.svg";
import { start } from "repl";

interface TimeEntryProps {
  id: number;
  client: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const TimeEntry = ({ id, client, startTimestamp, stopTimestamp }: TimeEntryProps) => {
  const startTime = new Date(startTimestamp);
  const endTime = new Date(stopTimestamp);
  const formattedStartTime = startTime.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedEndTime = endTime.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedWorkTime = formattedStartTime + " " + "-" + " " + formattedEndTime;

  const workHours = new Date(endTime.getTime() - startTime.getTime() - 3600000);
  const formattedWorkHours = workHours.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  //   function timeFormatter(time) {
  //   return time.toLocaleTimeString("nl-NL", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  // }

  // const currentDayOfMonth = startTime.getDate();

  // const formattedDate = startTime.toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  // });

  return (
    <Styled.TimeEntry>
      <Styled.LocationHoursWrapper>
        <Styled.WorkLocation>{client}</Styled.WorkLocation>
        <Styled.TotalWorkHours>
          <Styled.WorkHours>{formattedWorkTime}</Styled.WorkHours>
          <Styled.WorkTime>{formattedWorkHours}</Styled.WorkTime>
        </Styled.TotalWorkHours>
      </Styled.LocationHoursWrapper>
      <Styled.TrashButton>
        <TrashIcon />
      </Styled.TrashButton>
    </Styled.TimeEntry>
  );
};
