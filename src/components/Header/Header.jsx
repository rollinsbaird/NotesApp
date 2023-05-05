// import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <header>
      <Title>Notes App</Title>
    </header>
  );
}

const Title = styled.h1`
  color: black;
  font-weight: 400;
  font-size: 40px;
`;

export default Header;
