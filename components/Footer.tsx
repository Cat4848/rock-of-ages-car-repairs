"use client";

import styled from "styled-components";

const Wrapper = styled.div``;

interface IFooter {
  backgroundColor: string;
}

export default function Footer({ backgroundColor = "black" }: IFooter) {
  return (
    <Wrapper>
      <small>
        {`Copyright © ${new Date().getFullYear()} Rock of Ages Software. All Rights Reserved.`}
      </small>
    </Wrapper>
  );
}
