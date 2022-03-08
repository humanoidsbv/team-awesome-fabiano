import React, { useEffect, useState, useContext } from "react";

import * as Styled from "./TimeEntries.styled";
import * as Types from "../time-entries/TimeEntries.types";

import { TimeEntry } from "../time-entry/";
import { Modal } from "../modal";
import { SecondaryHeader } from "../subheader";
import { addTimeEntry } from "../../services/time-entries-api";
import { StoreContext } from "../context-provider/ContextProvider";

interface TimeEntriesProps {
  timeEntries: Types.TimeEntryProps[];
  clients: Types.ClientsProps[];
}

export const TimeEntries = (props: TimeEntriesProps) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isModalActive, setIsModalActive] = useState(false);
  const [clients, setClients] = state.clients;

  useEffect(() => {
    setTimeEntries(props.timeEntries);
    setClients(props.clients);
  }, []);

  async function handleClick(newTimeEntry: Types.TimeEntryProps) {
    const formattedNewEntry = await addTimeEntry(newTimeEntry);
    if (formattedNewEntry) {
      setTimeEntries([...timeEntries, formattedNewEntry]);
    }
  }

  timeEntries.sort(function (a, b) {
    return new Date(b.startTimestamp).getTime() - new Date(a.startTimestamp).getTime();
  });

  const formattedEntryDate = (date: string) => {
    const formattedDate = new Date(date);

    return formattedDate.toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatDuration = (duration: number) => {
    const hours = Number.parseInt(String(duration / 1000 / 60 / 60)).toString();
    const minutes = Number.parseInt(String((duration / 1000 / 60) % 60)).toString();
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  };

  const getDurationByDay = (isoDate: string, timeEntries: Types.TimeEntryProps[]) => {
    const calculateDuration = ({
      startTimestamp,
      stopTimestamp,
    }: {
      startTimestamp: string;
      stopTimestamp: string;
    }) => {
      return new Date(stopTimestamp).getTime() - new Date(startTimestamp).getTime();
    };

    const duration = timeEntries
      .filter(
        ({ startTimestamp }) =>
          new Date(startTimestamp).toDateString() === new Date(isoDate).toDateString(),
      )
      .reduce((acc, timeEntry) => acc + calculateDuration(timeEntry), 0);

    return formatDuration(duration);
  };

  const [clientFilter, setClientFilter] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientFilter(event.target.value);
  };

  return (
    <div>
      <SecondaryHeader
        title="Timesheets"
        subtitle={`${timeEntries.length} Entries`}
        buttonLabel="New time entry"
        buttonKind="primary"
        buttonOnClick={() => setIsModalActive(true)}
        buttonIcon={true}
      />
      <select onChange={handleChange}>
        {clients.map((client: Types.ClientsProps) => {
          return <option value={client.name ?? ""}>{client.name}</option>;
        })}
      </select>
      <Styled.Container>
        {timeEntries
          .filter((entry) => (clientFilter !== "" ? entry.client === clientFilter : true))
          .map((timeEntry: Types.TimeEntryProps, i, array) => {
            const currentDate = formattedEntryDate(timeEntry.startTimestamp);
            const previousDate = formattedEntryDate(array[i - 1]?.startTimestamp);
            const day = new Date(timeEntry.startTimestamp).toLocaleString("en-GB", {
              weekday: "long",
            });

            return (
              <React.Fragment key={timeEntry.id}>
                {currentDate !== previousDate && (
                  <Styled.DateWorkTimeWrapper>
                    <Styled.Date>{`${day} ${formattedEntryDate(
                      timeEntry.startTimestamp,
                    )}`}</Styled.Date>
                    <Styled.Date>
                      {getDurationByDay(timeEntry.startTimestamp, timeEntries)}
                    </Styled.Date>
                  </Styled.DateWorkTimeWrapper>
                )}
                <TimeEntry {...timeEntry} />
              </React.Fragment>
            );
          })}
        <Modal
          isActive={isModalActive}
          onClose={() => setIsModalActive(false)}
          handleAddButtonClick={handleClick}
        />
      </Styled.Container>
    </div>
  );
};
