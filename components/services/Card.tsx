import styled from "styled-components";
import color from "@/lib/color";
import { IService } from "@/lib/servicesData";
import List from "./List";

const Wrapper = styled.div`
  background: ${color.black};
  opacity: 0.7;
`;

const Banner = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
`;
const Title = styled.h4``;
const Price = styled.p``;

interface ICard<Content> {
  bannerColor: string;
  content: Content;
}

export default function Card({
  bannerColor = "white",
  content = { title: "", price: "", replace: [], check: [] }
}: ICard<IService>) {
  return (
    <Wrapper>
      <Banner $color={bannerColor} />
      <Title>{content.price}</Title>
      <Price>{content.price}</Price>
      <List list={content.replace} />
    </Wrapper>
  );
}
