import styled from "styled-components";
import color from "@/lib/color";
import { IService } from "@/lib/servicesData";
import List from "./List";

const Wrapper = styled.div`
  background: ${color.black};
  color: ${color.silver};
  opacity: 0.75;
  font-size: calc(1em + 1vw);
  padding: 1em;
  height: 100%;
  width: 20em;
`;

const Banner = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  height: 0.5em;
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
      <Title>{content.title}</Title>
      <Price>{content.price}</Price>
      <List list={content.replace} />
      <List list={content.check} />
    </Wrapper>
  );
}
