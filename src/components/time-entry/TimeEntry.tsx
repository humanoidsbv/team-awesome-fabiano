import * as Styled from "./TimeEntry.styled";

import TrashIcon from "../../../public/icons/trash-bin.svg";

interface timeEntriesProps {
  client: string;
}

export const TimeEntry = ({ client }: timeEntriesProps) => {
  return (
    <Styled.TimeEntry>
      <Styled.LocationHoursWrapper>
        <Styled.WorkLocation>{client}</Styled.WorkLocation>
        <Styled.TotalWorkHours>
          <Styled.WorkHours>09:00 - 17:00</Styled.WorkHours>
          <Styled.WorkTime>08:00</Styled.WorkTime>
        </Styled.TotalWorkHours>
      </Styled.LocationHoursWrapper>
      <Styled.TrashButton>
        <TrashIcon />
      </Styled.TrashButton>
    </Styled.TimeEntry>
  );
};
