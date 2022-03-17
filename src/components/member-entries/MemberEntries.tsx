import { ChangeEvent, useEffect, useState, useContext, Fragment } from "react";

import { useMutation } from "@apollo/client";
import * as Styled from "./MemberEntries.styled";
import * as Types from "./MemberEntries.types";

import { SecondaryHeader } from "../subheader";
import { MemberEntry } from "../member-entry";
import { MemberModal } from "../member-modal";
import { StoreContext } from "../context-provider";
import { CREATE_TEAM_MEMBER } from "../../services/mutations";

interface MemberEntriesProps {
  teamMembers: Types.MemberEntryProps[];
}

export const MemberEntries = (props: MemberEntriesProps) => {
  const state = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = state.teamMembers;
  const [isMemberModalActive, setIsMemberModalActive] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setTeamMembers(props.teamMembers);
  }, []);

  const [addTeamMember] = useMutation(CREATE_TEAM_MEMBER, {
    onCompleted: (data) => setTeamMembers([...teamMembers, data.createTeamMember]),
  });

  async function handleClick(newMemberEntry: Types.MemberEntryProps) {
    addTeamMember({
      variables: {
        firstName: newMemberEntry.firstName,
        lastName: newMemberEntry.lastName,
        emailAddress: newMemberEntry.emailAddress,
        label: newMemberEntry.label,
        client: newMemberEntry.client,
        role: newMemberEntry.role,
        startingDate: newMemberEntry.startingDate,
      },
    });
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

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMemberSort(event.target.value);
  };

  return (
    <>
      <SecondaryHeader
        buttonIcon
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
              <Fragment key={teamMember.id}>
                <MemberEntry {...teamMember} />
              </Fragment>
            );
          })}
        <MemberModal
          // eslint-disable-next-line react/jsx-no-bind
          handleAddButtonClick={handleClick}
          isActive={isMemberModalActive}
          onClose={() => setIsMemberModalActive(false)}
        />
      </Styled.Container>
    </>
  );
};
