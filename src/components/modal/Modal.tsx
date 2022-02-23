import React, { useState } from "react";

import { createPortal } from "react-dom";
import { Button } from "../button/Button";
import * as Styled from "./Modal.styled";

import CloseArrowIcon from "../../../public/icons/close-arrow.svg";

interface ModalProps {
  children?: string;
  isActive: boolean;
  onClose: () => void;
  addButtonOnClick: (newTimeEntry) => void;
}

interface ITimeEntry {
  client: string;
  activity: string;
  date: string;
  startTimestamp: string;
  stopTimestamp: string;
}

export const Modal = ({ children, isActive, onClose, addButtonOnClick }: ModalProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<ITimeEntry>({
    client: "",
    activity: "",
    date: "",
    startTimestamp: "",
    stopTimestamp: "",
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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

    addButtonOnClick({
      ...newTimeEntry,
      startTimestamp,
      stopTimestamp,
    });

    setNewTimeEntry({});
  }
  return (
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
              <Styled.InputBig
                type="text"
                name="client"
                value={newTimeEntry.client ?? ""}
                onChange={handleChange}
              />
            </Styled.ClientActivity>
            <Styled.ClientActivity>
              Activity
              <Styled.InputBig
                type="text"
                name="activity"
                value={newTimeEntry.activity ?? ""}
                onChange={handleChange}
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
                />
              </Styled.FromTo>
              <Styled.FromTo>
                To
                <Styled.InputSmall
                  type="time"
                  name="stopTimestamp"
                  value={newTimeEntry.stopTimestamp ?? ""}
                  onChange={handleChange}
                />
              </Styled.FromTo>
              <Styled.FromTo>
                Total
                <Styled.SumWorkTime>08:00</Styled.SumWorkTime>
              </Styled.FromTo>
            </Styled.FromToTotal>
          </Styled.DateFromTo>
          <Styled.Buttons>
            <Button label="Cancel" kind="secondary" />
            <Button label="Add time entry" onClick={(event) => handleSubmit(event)} />
          </Styled.Buttons>
        </Styled.Modal>
      </Styled.Container>,
      document.body,
    )
  );
};
