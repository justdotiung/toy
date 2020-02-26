import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemWrapper = styled.div`
  width: calc(100% - 10px);
  max-width: calc(100% - 70%);
  min-width: 400px;
  height: 400px;
  background: white;
  margin: 10px;
  transition: 0.1s;

  @media (max-width: 1510px) {
    background: yellow;
    max-width: calc(100% - 52%);
  }
  @media (max-width: 1070px) {
    max-width: 100%;
    background: red;
  }

  :hover {
    transform: scale(0.97);
    opacity: 0.8;
  }
`;

const MainItem = ({ data }) => {
  const { id, title, date, hit, name } = data;

  return (
    <ItemWrapper>
      <Link to={`/:${name}/:${id}`}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{date}</div>
        <div>{hit}</div>
        <div>{name}</div>
      </Link>
    </ItemWrapper>
  );
};

export default MainItem;
