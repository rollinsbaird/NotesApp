import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import VisuallyHidden from "../VisuallyHidden";

function Document({ name, id, documents, setDocuments, currentDoc, setCurrentDoc }) {
  const [renaming, setRenaming] = React.useState(false);
  const [newName, setNewName] = React.useState(name);

  const handleFocus = (e) => e.target.select();

  React.useEffect(() => {
    const newDocs = documents;
    newDocs[id-1].name = newName;
    setDocuments(newDocs);
  }, [renaming]);

  return (
    <SelectDocument
      onClick={() => {
        setCurrentDoc(id);
      }}
      onDoubleClick={() => {
        setRenaming(!renaming);
      }}>
      <Wrapper current={id === currentDoc}>
        {renaming ? (
          <RenameForm
            onSubmit={(event) => {
              event.preventDefault();
              setRenaming(!renaming);
            }}>
            <VisuallyHidden>
              <label>Notes</label>
            </VisuallyHidden>
            <NameInput
              type="text"
              id="rename-field"
              title="rename-field"
              autoFocus
              maxLength={18}
              required
              value={newName}
              onFocus={handleFocus}
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </RenameForm>
        ) : (
          <Name>{newName ? newName : name}</Name>
        )}
      </Wrapper>
    </SelectDocument>
  );
}
Document.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  documents: PropTypes.array.isRequired,
  setDocuments: PropTypes.func.isRequired,
  currentDoc: PropTypes.number.isRequired,
  setCurrentDoc: PropTypes.func.isRequired,
};

const SelectDocument = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  border-radius: 5px;

  &:hover {
    border-color: #ffffff;
  }
`;

const Wrapper = styled.li`
  background: ${(props) => (props.current ? "#d0d0d0" : "#888888")};
  border: none;
  border-radius: 5px;
  height: 60px;
  width: 100%;
  padding: 0px 8px;
  margin-block-end: 8px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const RenameForm = styled.form`
  width: 100%;
  overflow: hidden;
`;

const NameInput = styled.input`
  width: min-content;
  resize: none;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 500;
  /* margin: 0px 8px; */
`;

const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-inline-start: 8px;
`;

export default Document;
