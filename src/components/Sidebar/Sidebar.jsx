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
          <Document
            key={doc.id}
            name={doc.name}
            id={doc.id}
            documents={documents}
            setDocuments={setDocuments}
            currentDoc={currentDoc}
            setCurrentDoc={setCurrentDoc}
          />
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
