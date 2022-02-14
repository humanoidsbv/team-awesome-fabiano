import * as Styled from "./SecondaryHeader.styled";
import { Button } from "../button/Button";

const handleClick = () => alert("hello");

export const SecondaryHeader = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Timesheets>Timesheets</Styled.Timesheets>
        <Styled.VerticalLine>|</Styled.VerticalLine>
        <Styled.Entries>12 Entries</Styled.Entries>
      </Styled.Wrapper>
      <Button PlusIcon="true" label="New time entry" style="primary" onClick={handleClick} />
    </Styled.Container>
  );
};
