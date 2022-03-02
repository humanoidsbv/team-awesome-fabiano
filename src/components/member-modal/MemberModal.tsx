import * as Styled from "./MemberModal.styled";

import { createPortal } from "react-dom";
import { Button } from "../button";

import CloseArrowIcon from "../../../public/icons/close-arrow.svg";

export const MemberModal = ({ isActive, onClose }) => {
  return isActive
    ? createPortal(
        <Styled.Container onClick={onClose}>
          <Styled.MemberModal
            role="dialog"
            aria-labelledby="dialog"
            aria-modal="true"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <Styled.Title>
              New Humanoid
              <Styled.CloseButton onClick={onClose}>
                <CloseArrowIcon />
              </Styled.CloseButton>
            </Styled.Title>
            <Styled.AvatarWrapper>
              <Styled.AvatarImage src="/images/fabiano.jpg" />
              Edit Avatar
            </Styled.AvatarWrapper>
            <Styled.InputFields>
              <Styled.FullName>
                <Styled.InputName>
                  First name
                  <Styled.InputRegular required type="text" />
                </Styled.InputName>
                <Styled.InputName>
                  Last name
                  <Styled.InputRegular required type="text" />
                </Styled.InputName>
              </Styled.FullName>
              <Styled.MiddleFields>
                <Styled.InputName>
                  E-mail address
                  <Styled.InputRegular required type="text" />
                </Styled.InputName>
                <Styled.InputName>
                  Label
                  <Styled.InputBig required type="text" />
                </Styled.InputName>
                <Styled.InputName>
                  Employer
                  <Styled.InputRegular required type="text" />
                </Styled.InputName>
              </Styled.MiddleFields>
              <Styled.FullName>
                <Styled.InputName>
                  Role
                  <Styled.InputRegular required type="text" />
                </Styled.InputName>
                <Styled.InputName>
                  Starting date
                  <Styled.InputRegular required type="date" />
                </Styled.InputName>
              </Styled.FullName>
            </Styled.InputFields>
            <Styled.Buttons>
              <Button label="Cancel" kind="secondary" onClick={onClose} />
              <Button label="Add Humanoid" />
            </Styled.Buttons>
          </Styled.MemberModal>
        </Styled.Container>,
        document.body,
      )
    : null;
};
