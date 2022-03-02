import React, { useState, useRef } from "react";

import { createPortal } from "react-dom";
import { Button } from "../button/Button";

import * as Styled from "./Modal.styled";
import * as Types from "../time-entries/TimeEntries.types";

import CloseArrowIcon from "../../../public/icons/close-arrow.svg";

export const Modal = ({ isActive, onClose, handleAddButtonClick }: Types.ModalProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntryProps>({
    client: "",
    activity: "",
    date: "",
    startTimestamp: "",
    stopTimestamp: "",
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current!.checkValidity());
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  function handleSubmit(event: any) {
    event.preventDefault();

    const startTimestamp = new Date(
      newTimeEntry.date + " " + newTimeEntry.startTimestamp,
    ).toISOString();
    const stopTimestamp = new Date(
      newTimeEntry.date + " " + newTimeEntry.stopTimestamp,
    ).toISOString();

    handleAddButtonClick({
      ...newTimeEntry,
      startTimestamp,
      stopTimestamp,
    });

    setNewTimeEntry({} as Types.TimeEntryProps);
  }

  return isActive
    ? createPortal(
        <Styled.Container onClick={onClose}>
          <Styled.Modal
            aria-labelledby="dialog"
            aria-modal="true"
            onClick={(event) => {
              event.stopPropagation();
            }}
            role="dialog"
          >
            <Styled.Title>
              New time entry
              <Styled.CloseButton onClick={onClose}>
                <CloseArrowIcon />
              </Styled.CloseButton>
            </Styled.Title>
            <form ref={formRef}>
              <Styled.InputFields>
                <Styled.ClientActivity>
                  Client
                  <Styled.InputBig
                    name="client"
                    onChange={handleChange}
                    required
                    type="text"
                    value={newTimeEntry.client ?? ""}
                  />
                </Styled.ClientActivity>
                <Styled.ClientActivity>
                  Activity
                  <Styled.InputBig
                    name="activity"
                    onChange={handleChange}
                    required
                    type="text"
                    value={newTimeEntry.activity ?? ""}
                  />
                </Styled.ClientActivity>
              </Styled.InputFields>
              <Styled.DateFromTo>
                <Styled.Date>
                  Date
                  <Styled.InputDate
                    name="date"
                    onChange={handleChange}
                    required
                    type="date"
                    value={newTimeEntry.date ?? ""}
                  />
                </Styled.Date>
                <Styled.FromToTotal>
                  <Styled.FromTo>
                    From
                    <Styled.InputSmall
                      name="startTimestamp"
                      onChange={handleChange}
                      required
                      type="time"
                      value={newTimeEntry.startTimestamp ?? ""}
                    />
                  </Styled.FromTo>
                  <Styled.FromTo>
                    To
                    <Styled.InputSmall
                      name="stopTimestamp"
                      onChange={handleChange}
                      required
                      type="time"
                      value={newTimeEntry.stopTimestamp ?? ""}
                    />
                  </Styled.FromTo>
                  <Styled.FromTo>
                    Total
                    <Styled.SumWorkTime>08:00</Styled.SumWorkTime>
                  </Styled.FromTo>
                </Styled.FromToTotal>
              </Styled.DateFromTo>
            </form>
            <Styled.Buttons>
              <Button label="Cancel" kind="secondary" onClick={onClose} />
              <Button
                disabled={!isFormValid}
                label="Add time entry"
                onClick={(event) => handleSubmit(event)}
              />
            </Styled.Buttons>
          </Styled.Modal>
        </Styled.Container>,
        document.body,
      )
    : null;
};
