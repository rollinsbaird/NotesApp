import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import VisuallyHidden from "../VisuallyHidden";

function NotesArea({ editing }) {
  const [notes, setNotes] = React.useState("");

  return editing ? (
    <NotesForm>
      <VisuallyHidden>
        <label>Notes</label>
      </VisuallyHidden>
      <TextInput
        id="notes-field"
        title="notes-field"
        placeholder="Type or paste your notes here"
        value={notes}
        onChange={(event) => {
          setNotes(event.target.value);
          console.log(notes);
        }}
      />
    </NotesForm>
  ) : (
    <>
      <VisuallyHidden>
        <label>Notes</label>
      </VisuallyHidden>
      <DisplayNotes>{notes}</DisplayNotes>
    </>
  );
}
NotesArea.propTypes = {
  editing: PropTypes.bool.isRequired,
};

const NotesForm = styled.form`
  width: 100%;
  height: 100%;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 95%;
  resize: none;
`;

const DisplayNotes = styled.p`
  height: 95%;
  background: #3b3b3b;
  padding: 2px;
  font-size: large;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

export default NotesArea;
