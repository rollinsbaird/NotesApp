// import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import DocumentList from "../DocumentList";
import Document from "../Document";
import Icon from "../Icon";

function Sidebar({ documents, setDocuments, currentDoc, setCurrentDoc }) {
  function addDoc() {
    const numDocs = documents.length + 1;
    const newDoc = {
      name: `Document ${numDocs}`,
      id: numDocs,
    };
    setDocuments([...documents, newDoc]);
    setCurrentDoc(numDocs);
  }

  return (
    <Wrapper>
      <DocumentList>
        {documents.map((doc) => (
          <SelectDocument
            key={doc.id}
            onClick={() => {
              setCurrentDoc(doc.id);
            }}>
            <StyledDocument
              key={doc.id}
              name={doc.name}
              id={doc.id}
              current={doc.id === currentDoc}
            />
          </SelectDocument>
        ))}
      </DocumentList>
      <ButtonWrapper onClick={addDoc}>
        <Icon id={"plus-circle"} size={42} />
      </ButtonWrapper>
    </Wrapper>
  );
}
Sidebar.propTypes = {
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
`;

const StyledDocument = styled(Document)`
  background: ${(props) => (props.current ? "blue" : "gray")};
`;

const Wrapper = styled.div`
  background: cream;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const ButtonWrapper = styled.button`
  margin: auto;
  margin-block-start: 8px;
  border: none;
  padding: 0;
  background: none;
`;

export default Sidebar;
