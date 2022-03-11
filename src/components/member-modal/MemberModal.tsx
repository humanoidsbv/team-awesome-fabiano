import { createPortal } from "react-dom";
import React, { useRef, useState } from "react";

import * as Styled from "./MemberModal.styled";
import * as Types from "../member-entries/MemberEntries.types";

import { Button } from "../button";

import CloseArrowIcon from "../../../public/icons/close-arrow.svg";

export const MemberModal: React.FC<Types.MemberModalProps> = ({
  handleAddButtonClick,
  isActive,
  onClose,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const initialTimeEntry = {
    client: "",
    emailAddress: "",
    firstName: "",
    label: "",
    lastName: "",
    role: "",
    startingDate: "",
  };
  const [newMemberEntry, setNewMemberEntry] = useState(initialTimeEntry);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current!.checkValidity());
    setNewMemberEntry({ ...newMemberEntry, [target.name]: target.value });
  };

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    handleAddButtonClick({
      ...newMemberEntry,
    });

    setNewMemberEntry(initialTimeEntry);
  }

  return isActive
    ? createPortal(
        // eslint-disable-next-line react/jsx-indent
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
            <form ref={formRef}>
              <Styled.AvatarWrapper>
                <Styled.AvatarImage src="/images/fabiano.jpg" />
                Edit Avatar
              </Styled.AvatarWrapper>
              <Styled.InputFields>
                <Styled.FullName>
                  <Styled.InputName>
                    First name
                    <Styled.InputRegular
                      name="firstName"
                      onChange={handleChange}
                      required
                      type="text"
                      value={newMemberEntry.firstName}
                    />
                  </Styled.InputName>
                  <Styled.InputName>
                    Last name
                    <Styled.InputRegular
                      name="lastName"
                      onChange={handleChange}
                      required
                      type="text"
                      value={newMemberEntry.lastName}
                    />
                  </Styled.InputName>
                </Styled.FullName>
                <Styled.MiddleFields>
                  <Styled.InputName>
                    E-mail address
                    <Styled.InputRegular
                      name="emailAddress"
                      onChange={handleChange}
                      required
                      type="text"
                      value={newMemberEntry.emailAddress}
                    />
                  </Styled.InputName>
                  <Styled.InputName>
                    Label
                    <Styled.InputBig
                      name="label"
                      onChange={handleChange}
                      required
                      type="text"
                      value={newMemberEntry.label}
                    />
                  </Styled.InputName>
                  <Styled.InputName>
                    Client
                    <Styled.InputRegular
                      name="client"
                      onChange={handleChange}
                      required
                      type="text"
                      value={newMemberEntry.client}
                    />
                  </Styled.InputName>
                </Styled.MiddleFields>
                <Styled.FullName>
                  <Styled.InputName>
                    Role
                    <Styled.InputRegular
                      name="role"
                      onChange={handleChange}
                      required
                      type="text"
                      value={newMemberEntry.role}
                    />
                  </Styled.InputName>
                  <Styled.InputName>
                    Starting date
                    <Styled.InputRegular
                      name="startingDate"
                      onChange={handleChange}
                      required
                      type="date"
                      value={newMemberEntry.startingDate}
                    />
                  </Styled.InputName>
                </Styled.FullName>
              </Styled.InputFields>
            </form>
            <Styled.ButtonContainer>
              <Button label="Cancel" kind="secondary" onClick={onClose} />
              <Button
                disabled={!isFormValid}
                label="Add Humanoid"
                onClick={(event) => handleSubmit(event)}
              />
            </Styled.ButtonContainer>
          </Styled.MemberModal>
        </Styled.Container>,
        document.body,
      )
    : null;
};
