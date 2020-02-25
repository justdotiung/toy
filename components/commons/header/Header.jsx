import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Logo from "./Logo";
import styled from "styled-components";

const HeaderBlock = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  height: 56px;
  position: fixed;
  z-index: 1;
`;

const ButtonWrapper = styled.button`
  width: 3.5rem;
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

const WhiteSpace = styled.div`
  height: 56px;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Logo />
        <Form />
        <ButtonWrapper>
          <Link to="/login" style={{ marginRight: "10px" }}>
            로그인
          </Link>
        </ButtonWrapper>
      </HeaderBlock>
      <WhiteSpace />
    </>
  );
};

export default Header;
