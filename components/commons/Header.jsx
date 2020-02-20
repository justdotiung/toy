import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";

const HeaderBlock = styled.div`
display:flex;



  div{
      margin-left:auto;
      margin-right:10px;
  }
`;

const HeaderWrapper = styled(ScreenHelper)`
 
  border: 1px solid black;
`;

const Header = () => {
  return (
    <HeaderWrapper>

        <HeaderBlock><div>akfxn</div></HeaderBlock>
        <Link to="/">durl</Link>

    </HeaderWrapper>
  );
};

export default Header;
