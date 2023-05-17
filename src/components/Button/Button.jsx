import PropTypes from "prop-types";
import styled from "styled-components";

// import { COLORS } from "../../constants";

import Icon from "../Icon";
// import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    border: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 36,
    border: 2,
    height: 36,
  },
};

const Button = ({ icon }) => {
  const styles = STYLES.large;
  return (
    <Wrapper>
      <DisplayIcon style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </DisplayIcon>
    </Wrapper>
  );
};
Button.propTypes = {
  icon: PropTypes.string.isRequired,
};

const Wrapper = styled.button`
  display: block;
  position: relative;
  color: gray;

  &:hover {
    color: white;
  }
`;

const DisplayIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default Button;
