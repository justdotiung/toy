import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyleButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background: red;
  :hover {
    cursor: pointer;
  }
`;

const LinkBlock = css`
  ${StyleButton}
`;
const ButtonBlock = css`
  ${StyleButton}
`;

const AuthButton = ({ to, ...rest }) => {
  return <>{to ? <LinkBlock to {...rest} /> : <ButtonBlock {...rest} />}</>;
};

export default AuthButton;
