import * as Styled from "./MemberEntry.styled";
import * as Types from "../member-entries/MemberEntries.types";

export const MemberEntry = ({
  client,
  firstName,
  lastName,
  role,
  startingDate,
}: Types.MemberEntryProps) => {
  const formattedStartingDate = new Date(startingDate).toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.AvatarContainer>
          <Styled.AvatarImage src="/images/fabiano.jpg" />
          <Styled.AvatarNameRole>
            <Styled.Value>{`${firstName} ${lastName}`}</Styled.Value>
            <Styled.Role>{role}</Styled.Role>
          </Styled.AvatarNameRole>
        </Styled.AvatarContainer>
        <Styled.AssignmentContainer>
          <Styled.Client>
            <Styled.Value>{client}</Styled.Value>
            <Styled.Role>Client</Styled.Role>
          </Styled.Client>
          <Styled.Date>
            <Styled.Value>{formattedStartingDate}</Styled.Value>
            <Styled.Role>Starting date</Styled.Role>
          </Styled.Date>
        </Styled.AssignmentContainer>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
