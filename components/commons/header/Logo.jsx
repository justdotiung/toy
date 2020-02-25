import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    margin-left: 3rem;
    width: 100px;
    height: 2rem;
    overflow: hidden;
`;


const Logo = () => {
    return (
        <LogoWrapper>
            네트퓨
        </LogoWrapper>
    );
};

export default Logo;