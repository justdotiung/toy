import React from "react";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";

const HeaderWrapper = styled(ScreenHelper)`
  width: 800px;
  background: red;
  border: 1px solid black;
  font-size: 2rem;
`;

const Div = styled.div`
    background: red;
`;

const Header = () => {
  return <HeaderWrapper>dksldi역</HeaderWrapper>;
};

export default Header;
