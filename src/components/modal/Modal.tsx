import React from "react";

import { createPortal } from "react-dom";
import { Button } from "../button/Button";
import * as Styled from "./Modal.styled";

import CloseArrowIcon from "../../../public/icons/close-arrow.svg";

interface ModalProps {
  children?: string;
  isActive: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isActive, onClose }: ModalProps) =>
  isActive &&
  createPortal(
    <Styled.Container onClick={onClose}>
      <Styled.Modal
        role="dialog"
        aria-labelledby="dialog"
        aria-modal="true"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Styled.Entry>
          New time entry
          <Styled.CloseButton onClick={onClose}>
            <CloseArrowIcon />
          </Styled.CloseButton>
        </Styled.Entry>
        <Styled.InputFields>
          <Styled.ClientActivity>
            Client
            <Styled.InputBig type="text" />
          </Styled.ClientActivity>
          <Styled.ClientActivity>
            Activity
            <Styled.InputBig type="text" />
          </Styled.ClientActivity>
        </Styled.InputFields>
        <Styled.DateFromTo>
          <Styled.Date>
            Date
            <Styled.InputBig type="date" />
          </Styled.Date>
          <Styled.FromToTotal>
            <Styled.FromTo>
              From
              <Styled.InputSmall type="time" />
            </Styled.FromTo>
            <Styled.FromTo>
              To
              <Styled.InputSmall type="time" />
            </Styled.FromTo>
          </Styled.FromToTotal>
        </Styled.DateFromTo>
        <Styled.Buttons>
          <Button label="Cancel" kind="secondary" />
          <Button label="Add time entry" />
        </Styled.Buttons>
      </Styled.Modal>
    </Styled.Container>,
    document.body,
  );
