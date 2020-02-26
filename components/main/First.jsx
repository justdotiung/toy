import React from "react";
import styled from "styled-components";
import ScreenHelper from "../commons/ScreenHelper";
import MainItem from "./MainItem";

const WrapperBlock = styled(ScreenHelper)`
  width: 100%;
  height: 100%;
  max-width:1920px;
`;

const WhiteSpace = styled.div`
  width: 240px;
  height: 10px;
  float:left;

  @media (max-width: 1070px) {
    width: 100px;    
  }
`;

const Items = styled.div`
  width: auto;
  float: none;
  background: gray;
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

const array = [
  {
    id: 1,
    name: "array",
    title: "title",
    hit: 1,
    date: `${new Date().toLocaleDateString()}`
  },
  {
    id: 2,
    name: "array2",
    title: "title2",
    hit: 2,
    date: `${new Date().toLocaleString()}`
  },
  {
    id: 3,
    name: "array3",
    title: "title3",
    hit: 3,
    date: `${new Date().toLocaleTimeString()}`
  },
  {
    id: 4,
    name: "array4",
    title: "title4",
    hit: 4,
    date: `${new Date().toLocaleTimeString()}`
  },
  {
    id: 5,
    name: "array5",
    title: "title5",
    hit: 3,
    date: `${new Date().toLocaleTimeString()}`
  },
];

const First = () => {
  return (
       
    <WrapperBlock>

      <WhiteSpace />
      <Items>
        {array && array.map(arr => <MainItem key={arr.id} data={arr} />)}
      </Items>
    </WrapperBlock>

  );
};

export default First;
