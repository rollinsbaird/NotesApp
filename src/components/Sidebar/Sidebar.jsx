// import React from 'react';
import styled from "styled-components";

function Sidebar() {
  return <Wrapper>
    <ul>
      <li>Document 1</li>
      <li>Document 2</li>
      <li>Document 3</li>
      <li>Document 4</li>
      <li>Document 5</li>
    </ul>
  </Wrapper>;
}

const Wrapper = styled.div`
  background: cream;
`;

export default Sidebar;
