import * as Styled from "./SecondaryHeader.styled";

import React, { useState } from "react";

import { Button } from "../button/";

interface SecondaryHeaderProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonKind: "primary" | "secondary";
  buttonOnClick: () => void;
  buttonIcon: boolean;
}

export const SecondaryHeader = ({
  title,
  subtitle,
  buttonLabel,
  buttonKind,
  buttonOnClick,
  buttonIcon,
}: SecondaryHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.VerticalLine>|</Styled.VerticalLine>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Wrapper>
      <Button label={buttonLabel} kind={buttonKind} onClick={buttonOnClick} icon={buttonIcon} />
    </Styled.Container>
  );
};
