"use client";

import styled from "styled-components";

const Wrapper = styled.div<{ $color: string; $height: string }>`
  background: ${({ $color }) => $color};
  height: ${({ $height }) => $height};
`;

interface IBottomTrim {
  color: string;
  height: string;
}

export default function Trim({
  color = "white",
  height = "0.5em"
}: IBottomTrim) {
  return <Wrapper $color={color} $height={height}></Wrapper>;
}
