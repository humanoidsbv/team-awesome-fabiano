import * as Styled from "./AccountButton.styled";

export const AccountButton = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.HumanoidsLogo src="/images/humanoids_logo.svg" />
        <Styled.ProfilePic src="/images/amijs.jpg" />
      </Styled.Wrapper>
      <Styled.ArrowDownIcon src="/images/arrow-down.svg" />
    </Styled.Container>
  );
};
