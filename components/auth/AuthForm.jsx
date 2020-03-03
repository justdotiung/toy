import React from "react";
import styled from "styled-components";
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

const AuthForm = ({ form, onChange, user }) => {

  const { name, password, chackPassword} = user;

  return (
    <>
      <StyledForm>
        {form && (
          <>
            <input
              type="text"
              name="name"
              placeholder="아이디"
              onChange={onChange}
              value={user.name}
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
              value={user.password}
            />

            <input
              type="password"
              name="ChackPassword"
              placeholder="비밀번호확인"
              onChange={onChange}
            />
          </>
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
