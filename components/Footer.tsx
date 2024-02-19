"use client";

import styled from "styled-components";

const Wrapper = styled.div<{ $backgroundColor: string }>`
  background: ${({ $backgroundColor }) => $backgroundColor};
`;

interface IFooter {
  backgroundColor: string;
  text: string;
  logo: string;
}

export default function Footer({
  backgroundColor = "black",
  text = "",
  logo = ""
}: IFooter) {
  return (
    <Wrapper $backgroundColor={backgroundColor}>
      <div>{logo}</div>
      <small>{text}</small>
    </Wrapper>
  );
}
