"use client";

import styled from "styled-components";

const Wrapper = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  height: 0.5em;
`;

interface IBottomTrim {
  color: string;
}

export default function BottomTrim({ color = "white" }: IBottomTrim) {
  return <Wrapper $color={color}></Wrapper>;
}
