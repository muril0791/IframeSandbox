// src/components/ActionButtons.tsx
import React from "react";
import { IoReloadSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import styled from "styled-components";

interface ActionButtonsProps {
  onCarregar: () => void;
  onRemover: () => void;
  onReloadIframe: () => void;
}
const Button = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  font-size: 22px;
  padding: 10px;
  border-radius: 50%;
  color: white;
  border: none;
  display: flex;

  &:hover {
    background-color: #182846;
    padding: 6px;
    width: 40px;
    height: 40px;
    font-size: 28px;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #182846;
    padding: 10px;
    width: 42px;
    height: 42px;
    & svg {
      transform: scale(0.9);
    }
  }
`;

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCarregar,
  onRemover,
  onReloadIframe,
}) => {
  return (
    <div
      className="buttons"
      style={{ margin: "6px", width: "auto", maxWidth: "120px" }}
    >
      <Button onClick={onCarregar}>
        <IoIosSearch />
      </Button>
      <Button onClick={onRemover}>
        <CiCircleRemove />
      </Button>
      <Button onClick={onReloadIframe} className="reloadIframeButton">
        <IoReloadSharp />
      </Button>
    </div>
  );
};

export default ActionButtons;
