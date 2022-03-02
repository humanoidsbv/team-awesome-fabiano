import * as Styled from "./MemberEntry.styled";

export const MemberEntry = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.AvatarContainer>
          <Styled.AvatarImage src="/images/fabiano.jpg" />
          <Styled.AvatarNameRole>
            <Styled.Value>Fabiano van Gool</Styled.Value>
            <Styled.Role>Full-stack Developer</Styled.Role>
          </Styled.AvatarNameRole>
        </Styled.AvatarContainer>
        <Styled.AssignmentContainer>
          <Styled.Client>
            <Styled.Value>Nikon Japan</Styled.Value>
            <Styled.Role>Client</Styled.Role>
          </Styled.Client>
          <Styled.Date>
            <Styled.Value>February 2022</Styled.Value>
            <Styled.Role>Starting date</Styled.Role>
          </Styled.Date>
        </Styled.AssignmentContainer>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
