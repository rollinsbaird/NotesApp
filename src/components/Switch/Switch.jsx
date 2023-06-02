// import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Switch({ editing, setEditing }) {
  const handleChange = (e) => {
    setEditing(e.target.checked);
  };

  return (
    <Label>
      <span>Toggle is {editing ? "on" : "off"}</span>
      <Input checked={editing} type="checkbox" onChange={handleChange} />
      <Slider />
    </Label>
  );
}
Switch.propTypes = {
  editing: PropTypes.bool.isRequired,
  setEditing: PropTypes.func.isRequired,
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-right: 8px;
`;

const Slider = styled.div`
  position: relative;
  width: 60px;
  height: 32px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(-2px, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Slider} {
    background: green;

    &:before {
      transform: translate(26px, -50%);
    }
  }
`;
// function Switch() {
//   return (
//     <Track>
//       <Input />
//       <Slider />
//     </Track>
//   );
// }

// const Track = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 60px;
//   height: 34px;
// `;

// const Input = styled.input`
//   opacity: 0;
//   width: 0;
//   height: 0;
// `;

// const Slider = styled.span`
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #ccc;
//   -webkit-transition: 0.4s;
//   transition: 0.4s;
//   border-radius: 34px;

//   &::before {
//     position: absolute;
//     content: "";
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: white;
//     -webkit-transition: 0.4s;
//     transition: 0.4s;
//     border-radius: 50%;
//   }
// `;
export default Switch;
