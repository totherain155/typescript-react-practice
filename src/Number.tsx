import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? "orange" : "black")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container> //
); // <{count: number}>

export default Number;
