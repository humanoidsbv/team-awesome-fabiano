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

  return (
    <>
      <SecondaryHeader
        title="Team members"
        subtitle={`${teamMembers.length} Humanoids`}
        buttonLabel="New Humanoid"
        buttonKind="primary"
        buttonOnClick={() => setIsMemberModalActive(true)}
        buttonIcon={true}
      />
      <Styled.Container>
        {teamMembers.map((teamMember) => {
          return (
            <React.Fragment key={teamMember.id}>
              <MemberEntry {...teamMember} />
            </React.Fragment>
          );
        })}
        <MemberModal
          isActive={isMemberModalActive}
          onClose={() => setIsMemberModalActive(false)}
          handleAddButtonClick={handleClick}
        />
      </Styled.Container>
    </>
  );
};
