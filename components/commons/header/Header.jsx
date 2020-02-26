import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Logo from "./Logo";
import styled from "styled-components";

const HeaderBlock = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  height: 56px;
  top: 0;
  position: fixed;
  z-index: 1;
`;

const ButtonWrapper = styled.button`
  width: 5rem;
  display: flex;
  justify-content: center;
  height: 2rem;
  border: none;
  outline: none;
  border-radius: 20px;
  margin-right: 40px;
  margin-left: auto;
  &:hover {
    background: white;
  }
`;

const MarginBlock = styled.div`
  padding: 1rem;
  display: flex;
`;

const WhiteSpace = styled.div`
  height: 56px;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <MarginBlock>
          <Link to="/">
            <Logo />
          </Link>
          <Form />
          <ButtonWrapper>
            <Link to="/login">로그인</Link>
          </ButtonWrapper>
        </MarginBlock>
      </HeaderBlock>
      <WhiteSpace />
    </>
  );
};

export default Header;
