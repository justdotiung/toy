import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1920px;

  @media (max-width: 786px) {
    width: 100%;
  }
`;

const ScreenHelper = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <>
      <Wrapper {...rest}>{children}</Wrapper>
    </>
  );
};

export default ScreenHelper;
