// import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Switch from "../Switch";

function Header({ editing, setEditing }) {
  return (
    <Wrapper>
      <Title>Notes App</Title>
      <Switch editing={editing} setEditing={setEditing} />
    </Wrapper>
  );
}
Header.propTypes = {
  editing: PropTypes.string.isRequired,
  setEditing: PropTypes.any.isRequired,
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: black;
  font-weight: 400;
  font-size: 40px;
`;

export default Header;
