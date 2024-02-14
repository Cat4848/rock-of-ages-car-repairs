"use client";

import Image from "next/image";
import styled from "styled-components";
import color from "@/lib/color";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Heading = styled.h2`
  position: absolute;
  top: 6vw;
  width: 100%;
`;

const StyledSpan = styled.span`
  color: white;
  font-size: calc(2em + 1vw);
  letter-spacing: -1px;
  line-height: 1.56em;
  background: ${color.silverTransparent};
  padding: 1.5%;
`;

interface IMainImage {
  src: any;
  alt: string;
  text: string;
}

export default function MainImage({
  src = "",
  alt = "",
  text = ""
}: IMainImage) {
  return (
    <Wrapper>
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        priority
        style={{ width: "100%", height: "auto" }}
      />
      <Heading>
        <StyledSpan>{text}</StyledSpan>
      </Heading>
    </Wrapper>
  );
}
