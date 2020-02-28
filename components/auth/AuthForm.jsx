import React, { useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import AuthButton from "./AuthButton";

const StyledInput = styled.input`
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0 10px 0 10px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    & +& {
    margin-top: 10px;

    }
`;





const AuthForm = () => {
  const history = useHistory();
  const onSubmit = useCallback(e => {
    e.preventDefault();
    history.push("/");
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          아이디
          <StyledInput type="text" name="username" placeholder="아이디" />
        </label>
        <StyledInput type="password" name="password" placeholder="비밀번호" />
        <AuthButton>로그인</AuthButton>
      </form>
    </>
  );
};

export default AuthForm;
