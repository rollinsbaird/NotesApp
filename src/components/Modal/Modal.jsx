// import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Modal({ children }) {
  return (
    <Wrapper>
      <form>
        <Title>
          <Color>{children}</Color>
        </Title>
        Original word:
        <Original />
        Difference:
        <Difference />
        <Explanation />
        <button formMethod="dialog" type="submit">
          Save
        </button>
      </form>
    </Wrapper>
  );
}
Modal.propTypes = {
  children: PropTypes.string.isRequired,
};

const Wrapper = styled.dialog`
  border: none;
  border-radius: 1rem;
  &::backdrop {
    background: hsl(250, 100%, 50%, 0.25);
  }
`;

const Title = styled.h2``;

const Color = styled.span``;

const Original = styled.input``;

const Difference = styled.input``;

const Explanation = styled.textarea``;

export default Modal;
