import React from 'react';
import styled from 'styled-components';
import ScreenHelper from '../commons/ScreenHelper';

const WrapperBlock = styled(ScreenHelper)`


`;
const Second = () => {
    return (
        <WrapperBlock style={{width: '100px', height:"2000px" , background:"green"}}>
        두번째 화면입니다 
      </WrapperBlock>
    );
};

export default Second;