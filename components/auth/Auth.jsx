import React from 'react';
import styled from 'styled-components';
import AuthButton from './AuthButton';

const AuthBlock = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:1024px;

`;

const AuthForm = styled.div`
    width: 500px;
    height: 600px;
    border: 1px solid blue;
    border-radius: 10px;

    .logo{

        border: 1px solid red;
    }

`;

const Login = () => {
    return (
        <AuthBlock>
            <AuthForm>
            <div className="logo">로고</div>
            <AuthButton>로그인</AuthButton>        
            <AuthButton to="/">취소</AuthButton>        
            </AuthForm>
        </AuthBlock>
    );
};

export default Login;