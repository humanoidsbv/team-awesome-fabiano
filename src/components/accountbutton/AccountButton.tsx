import * as Styled from "./AccountButton.styled";
import ArrowDownIcon from "../../../public/images/arrow-down.svg";

export const AccountButton = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.HumanoidsLogo src="/images/humanoids_logo.svg" />
        <Styled.ProfilePic src="/images/amijs.jpg" />
      </Styled.Wrapper>
      <Styled.ArrowDownIcon>
        <ArrowDownIcon fill="#fff" width="11px" />
      </Styled.ArrowDownIcon>
    </Styled.Container>
  );
};
