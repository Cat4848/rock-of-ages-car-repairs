"use client";

import styled from "styled-components";

const Wrapper = styled.div``;

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
    <Wrapper>
      <small>{text}</small>
    </Wrapper>
  );
}
