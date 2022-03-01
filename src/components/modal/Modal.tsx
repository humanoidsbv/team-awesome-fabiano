import React, { useState, useRef } from "react";

import { createPortal } from "react-dom";
import { Button } from "../button/Button";

import * as Styled from "./Modal.styled";
import * as Types from "../time-entries/TimeEntries.types";

import CloseArrowIcon from "../../../public/icons/close-arrow.svg";

export const Modal = ({ isActive, onClose, handleAddButtonClick }: Types.ModalProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean | undefined>(false);

  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntryProps>({
    client: "",
    activity: "",
    date: "",
    startTimestamp: "",
    stopTimestamp: "",
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
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
            role="dialog"
            aria-labelledby="dialog"
            aria-modal="true"
            onClick={(event) => {
              event.stopPropagation();
            }}
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
                    type="text"
                    name="client"
                    value={newTimeEntry.client ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Styled.ClientActivity>
                <Styled.ClientActivity>
                  Activity
                  <Styled.InputBig
                    type="text"
                    name="activity"
                    value={newTimeEntry.activity ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Styled.ClientActivity>
              </Styled.InputFields>
              <Styled.DateFromTo>
                <Styled.Date>
                  Date
                  <Styled.InputDate
                    type="date"
                    name="date"
                    value={newTimeEntry.date ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Styled.Date>
                <Styled.FromToTotal>
                  <Styled.FromTo>
                    From
                    <Styled.InputSmall
                      type="time"
                      name="startTimestamp"
                      value={newTimeEntry.startTimestamp ?? ""}
                      onChange={handleChange}
                      required
                    />
                  </Styled.FromTo>
                  <Styled.FromTo>
                    To
                    <Styled.InputSmall
                      type="time"
                      name="stopTimestamp"
                      value={newTimeEntry.stopTimestamp ?? ""}
                      onChange={handleChange}
                      required
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
                label="Add time entry"
                onClick={(event) => handleSubmit(event)}
                disabled={!isFormValid}
              />
            </Styled.Buttons>
          </Styled.Modal>
        </Styled.Container>,
        document.body,
      )
    : null;
};
