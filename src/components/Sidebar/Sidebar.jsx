// import React from 'react';
import styled from "styled-components";

import DocumentList from "../DocumentList";
import Document from "../Document";

function Sidebar() {
  const documents = [
    { name: "Doc 1", id: 1 },
    { name: "Doc 2", id: 2 },
    { name: "Doc 3", id: 3 },
    { name: "Doc 4", id: 4 },
  ];

  return (
    <Wrapper>
      <DocumentList>
        {documents.map(doc => (
          <Document key={doc.id} name={doc.name}/>
        ))}
      </DocumentList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: cream;
`;

export default Sidebar;
