import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import AuthButton from "./AuthButton";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    border: none;
    outline: none;
    height: 40px;
    font-size: 1rem;
    padding: 0 10px 0 10px;
    border-bottom: 1px solid #ccc;
    width: 400px;
    margin-top: 15px;
  }
`;

const AuthForm = ({ form }) => {
  const history = useHistory();
  const onSubmit = useCallback(e => {
    e.preventDefault();
    history.push("/");
  });
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="아이디" />
        <input type="password" name="password" placeholder="비밀번호" />
        {form && (
          <input
            type="password"
            name="ChackPassword"
            placeholder="비밀번호확인"
          />
        )}
        <AuthButton width="true">로그인</AuthButton>
        <div>
          <AuthButton to="/register">회원가입</AuthButton>
        </div>
      </StyledForm>
    </>
  );
};

export default AuthForm;
