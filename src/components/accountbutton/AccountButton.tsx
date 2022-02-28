import * as Styled from "./AccountButton.styled";

import ArrowDownIcon from "../../../public/icons/arrow-down.svg";

export const AccountButton = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.HumanoidsLogo src="/icons/humanoids_logo.svg" />
        <Styled.ProfilePic src="/images/fabiano.jpg" />
      </Styled.Wrapper>
      <Styled.ArrowDownIcon>
        <ArrowDownIcon />
      </Styled.ArrowDownIcon>
    </Styled.Container>
  );
};
