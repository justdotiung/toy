import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyleButton = css`
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    background: red;
    :hover {
      cursor: pointer;
    }
`;

const LinkBlock = styled(Link)`
  ${StyleButton}
`;
const ButtonBlock = styled.button`
  ${StyleButton}
`;

const AuthButton = (props) => {
  return <>{props.to ? <LinkBlock {...props}/> : <ButtonBlock {...props}/>}</>;
};

export default AuthButton;
