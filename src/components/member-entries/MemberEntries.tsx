import React, { useEffect, useState, useContext } from "react";

import * as Styled from "./MemberEntries.styled";
import * as Types from "../member-entries/MemberEntries.types";

import { SecondaryHeader } from "../subheader";
import { MemberEntry } from "../member-entry";
import { MemberModal } from "../member-modal";
import { StoreContext } from "../context-provider";
import { addMemberEntry } from "../../services/team-members-api";

interface MemberEntriesProps {
  teamMembers: Types.MemberEntryProps[];
}

export const MemberEntries = (props: MemberEntriesProps) => {
  const state = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = useState(props.teamMembers);
  const [isMemberModalActive, setIsMemberModalActive] = useState(false);

  useEffect(() => {
    setTeamMembers(props.teamMembers);
  }, []);

  async function handleClick(newMemberEntry: Types.MemberEntryProps) {
    const formattedNewEntry = await addMemberEntry(newMemberEntry);
    if (formattedNewEntry) {
      setTeamMembers([...teamMembers, formattedNewEntry]);
    }
  }

  const memberKeys = [
    {
      id: 55,
      label: "First Name",
      value: "firstName",
    },
    {
      id: 56,
      label: "Last Name",
      value: "lastName",
    },
    {
      id: 57,
      label: "Email Address",
      value: "emailAddress",
    },
    {
      id: 58,
      label: "Label",
      value: "label",
    },
    {
      id: 59,
      label: "Client",
      value: "client",
    },
    {
      id: 60,
      label: "Role",
      value: "role",
    },
    {
      id: 61,
      label: "Starting Date",
      value: "startingDate",
    },
  ];

  const [memberSort, setMemberSort] = useState("firstName");
  type MemberSortValues =
    | "client"
    | "emailAddress"
    | "firstName"
    | "label"
    | "lastName"
    | "role"
    | "startingDate";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMemberSort(event.target.value);
  };

  return (
    <>
      <SecondaryHeader
        buttonIcon={true}
        buttonKind="primary"
        buttonLabel="New Humanoid"
        buttonOnClick={() => setIsMemberModalActive(true)}
        subtitle={`${teamMembers.length} Humanoids`}
        title="Team members"
      />
      <select onChange={handleChange}>
        {memberKeys.map((memberKey) => {
          return (
            <option key={memberKey.id} value={memberKey.value ?? ""}>
              {memberKey.label}
            </option>
          );
        })}
      </select>
      <Styled.Container>
        {teamMembers
          .sort((a, b) =>
            a[memberSort as MemberSortValues].localeCompare(b[memberSort as MemberSortValues]),
          )
          .map((teamMember) => {
            return (
              <React.Fragment key={teamMember.id}>
                <MemberEntry {...teamMember} />
              </React.Fragment>
            );
          })}
        <MemberModal
          handleAddButtonClick={handleClick}
          isActive={isMemberModalActive}
          onClose={() => setIsMemberModalActive(false)}
        />
      </Styled.Container>
    </>
  );
};
