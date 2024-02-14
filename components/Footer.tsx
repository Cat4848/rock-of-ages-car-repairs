"use client";

import styled from "styled-components";

const Wrapper = styled.div``;

export default function Footer() {
  return (
    <Wrapper>
      <small>
        {`Copyright © ${new Date().getFullYear()} Rock of Ages Software. All Rights Reserved.`}
      </small>
    </Wrapper>
  );
}
