import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1920px;
  height: 100%;

  @media (min-width: 786px) {
    width: 100%;
  }
`;

const ScreenHelper = ({children}) => {
  return <Wrapper >{children}</Wrapper>;
};

export default ScreenHelper;
