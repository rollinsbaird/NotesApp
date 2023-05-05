import Header from "../Header";
import NotesArea from "../NotesArea/NotesArea";
import Sidebar from "../Sidebar";

import styled from "styled-components";

function App() {
  return (
      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <NotesWrapper>
          <NotesArea />
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
