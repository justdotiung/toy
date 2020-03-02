import React from 'react';
import styled from 'styled-components';
import AuthForm from './AuthForm';

const AuthBlock = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:1024px;

`;

const FormBlock = styled.div`
    width: 500px;
    height: 600px;
    border: 1px solid blue;
    border-radius: 10px;

    .logo{
        height: 300px;
        border: 1px solid red;
    }

`;

const Auth = () => {
    return (
        <AuthBlock>
            <FormBlock>
            <div className="logo">로고</div>
            <AuthForm />
            </FormBlock>
        </AuthBlock>
    );
};

export default Auth;