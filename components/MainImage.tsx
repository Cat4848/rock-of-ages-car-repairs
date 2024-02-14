import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div``;

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
    </Wrapper>
  );
}
