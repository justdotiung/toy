import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background:green;

  @media (max-width: 1070px) {
    width: 100px;    
  }
`;

const LinkWrapper = styled(Link)`
  padding: 1rem;
  font-size:1.25rem;
  text-align: center;
  :hover{
    background: red;
  }
`;

const Sidebar = () => {
  const onClick = useCallback(e => {
    e.preventDefault();
  });

  return (
    <>
      <SideWrapper>
        <LinkWrapper to="/">홈</LinkWrapper>
        <LinkWrapper to="/second">인기</LinkWrapper>
      </SideWrapper>
    </>
  );
};

export default Sidebar;
