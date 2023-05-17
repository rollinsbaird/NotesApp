import React from "react";
import styled from "styled-components";

import Header from "../Header";
import NotesArea from "../NotesArea";
import Sidebar from "../Sidebar";

function App() {
  const [editing, setEditing] = React.useState(true);
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header editing={editing} setEditing={setEditing} />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <NotesWrapper>
        <NotesArea editing={editing} />
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
