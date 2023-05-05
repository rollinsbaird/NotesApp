import React from "react";
import styled from "styled-components";

function NotesArea() {
  const [notes, setNotes] = React.useState("");

  return (
    <NotesForm>
      <label>Notes</label>
      <TextInput
        id="notes-field"
        title="notes-field"
        placeholder="Type or paste your notes here"
        value={notes}
        onChange={(event) => {
          setNotes(event.target.value);
        }}
      />
    </NotesForm>
  );
}

const NotesForm = styled.form`
  width: 100%;
  height: 100%;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 95%;
  resize: none;
`;

export default NotesArea;
