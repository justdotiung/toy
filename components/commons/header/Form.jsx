import React, { useState, useCallback } from "react";
import styled from "styled-components";

const FormWapper = styled.form`
  width: 100%;
  height: 2rem;
  max-width: 450px;
  border: 1px solid #d3d3d3;
  display: flex;
  border-radius: 5px;
`;

const InputWrapper = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
`;

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  width: 65px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  background-color: #f8f8f8;
`;

const Form = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    //서버로 전송
  };

  return (
    <>
      <FormWapper onSubmit={onSubmit}>
        <InputWrapper placeholder="검색" value={value} onChange={onChange} />
        <ButtonWrapper>검색</ButtonWrapper>
      </FormWapper>
    </>
  );
};

export default Form;
