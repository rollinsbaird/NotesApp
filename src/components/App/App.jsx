import React from "react";
import styled from "styled-components";

import Header from "../Header";
import NotesArea from "../NotesArea";
import Sidebar from "../Sidebar";

function App() {
  const [editing, setEditing] = React.useState(true);

  const [documents, setDocuments] = React.useState([
    { name: "Document 1", id: 1},
    { name: "Document 2", id: 2},
  ]);

  const [currentDoc, setCurrentDoc] = React.useState(1);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header editing={editing} setEditing={setEditing} />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar
          documents={documents}
          setDocuments={setDocuments}
          setCurrentDoc={setCurrentDoc}
        />
      </SidebarWrapper>
      <NotesWrapper>
        <NotesArea id={currentDoc} editing={editing} />
      </NotesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "header header" "sidebar notes-area";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  grid-area: header;
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
`;

const NotesWrapper = styled.div`
  grid-area: notes-area;
`;

export default App;
