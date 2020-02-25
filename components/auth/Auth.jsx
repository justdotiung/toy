import React from 'react';
import styled from 'styled-components';

const AuthBlock = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:1024px;

`;

const AuthForm = styled.div`
    width: 400px;
    height: 600px;
    background: red;
`;

const Login = () => {
    return (
        <AuthBlock>
            <AuthForm>
                
            </AuthForm>
        </AuthBlock>
    );
};

export default Login;