// import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Document({ name, current, renaming }) {
  return (
    <Wrapper current={current}>
      <Name>{name}</Name>
    </Wrapper>
  );
}
Document.propTypes = {
  name: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
  renaming: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
};

const Wrapper = styled.li`
  background: ${(props) => (props.current ? "#d0d0d0" : "#888888")};
  border: none;
  border-radius: 5px;
  height: 60px;
  width: 100%;
  margin-block-end: 8px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-inline-start: 8px;
`;

export default Document;
