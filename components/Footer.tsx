"use client";

import styled from "styled-components";

const Wrapper = styled.div<{ $backgroundColor: string; $textColor: string }>`
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $textColor }) => $textColor};
`;

interface IFooter {
  backgroundColor: string;
  textColor: string;
  text: string;
  logo: string;
}

export default function Footer({
  backgroundColor = "black",
  textColor = "",
  text = "",
  logo = ""
}: IFooter) {
  return (
    <Wrapper $backgroundColor={backgroundColor} $textColor={textColor}>
      <div>{logo}</div>
      <small>{text}</small>
    </Wrapper>
  );
}
