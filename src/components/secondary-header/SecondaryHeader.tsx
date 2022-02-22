import * as Styled from "./SecondaryHeader.styled";

import React, { useState } from "react";

import { Button } from "../button/";
import { Modal } from "../modal";

export const SecondaryHeader = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Timesheets>Timesheets</Styled.Timesheets>
        <Styled.VerticalLine>|</Styled.VerticalLine>
        <Styled.Entries>12 Entries</Styled.Entries>
      </Styled.Wrapper>
      <Button
        label="New time entry"
        kind="primary"
        onClick={() => setIsModalActive(true)}
        icon={true}
      />
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)}></Modal>
    </Styled.Container>
  );
};
