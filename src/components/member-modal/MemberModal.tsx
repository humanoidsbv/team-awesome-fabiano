import * as Styled from "./MemberModal.styled";

import { createPortal } from "react-dom";

import CloseArrowIcon from "../../../public/icons/close-arrow.svg";

export const MemberModal = ({ isActive, onClose }) => {
  return isActive
    ? createPortal(
        <Styled.Container onClick={onClose}>
          <Styled.MemberModal role="dialog" aria-labelledby="dialog" aria-modal="true">
            <Styled.Title>
              New Humanoid
              <Styled.CloseButton onClick={onClose}>
                <CloseArrowIcon />
              </Styled.CloseButton>
            </Styled.Title>
          </Styled.MemberModal>
        </Styled.Container>,
        document.body,
      )
    : null;
};
