import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemWrapper = styled.div`
  width: 400px;
  height: 400px;
  background: white;
  margin: 10px;
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
