import PropTypes from "prop-types";
import styled from "styled-components";
import { PlusCircle, Sun, Moon, Book, Edit } from "react-feather";

const icons = {
  "plus-circle": PlusCircle,
  sun: Sun,
  moon: Moon,
  book: Book,
  edit: Edit,
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}>
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};
Icon.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
