// import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";

function DocumentList({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
DocumentList.propTypes = {
  children: PropTypes.any.isRequired
}

const Wrapper = styled.ul`
  background: cream;
  overflow-y: scroll;
  padding: 0 8px;
`;

export default DocumentList;
