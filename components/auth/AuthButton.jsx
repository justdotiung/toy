import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyleButton = css`
  border: none;
  
  :hover {
    cursor: pointer;
  }

  ${props =>
    props.width &&
    css`
      width: 100%;
      font-size:2rem;
    `}
`;

const LinkBlock = styled(Link)`
  ${StyleButton}
`;
const ButtonBlock = styled.button`
  ${StyleButton}
`;

const AuthButton = props => {
  return (
    <>{props.to ? <LinkBlock {...props} /> : <ButtonBlock {...props} />}</>
  );
};

export default AuthButton;
