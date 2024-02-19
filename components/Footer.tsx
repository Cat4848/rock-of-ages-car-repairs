"use client";

import styled from "styled-components";

const Wrapper = styled.div<{
  $backgroundColor: string;
  $textColor: string;
  $height: string;
}>`
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $textColor }) => $textColor};
  height: ${({ $height }) => $height};
  margin-top: 10em;
`;

interface IFooter {
  height: string;
  backgroundColor: string;
  textColor: string;
  text: string;
  logo: string;
}

export default function Footer({
  height = "3em",
  backgroundColor = "black",
  textColor = "",
  text = "",
  logo = ""
}: IFooter) {
  return (
    <Wrapper $height={height} $backgroundColor={backgroundColor} $textColor={textColor}>
      <div>{logo}</div>
      <small>{text}</small>
    </Wrapper>
  );
}
