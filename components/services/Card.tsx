import styled from "styled-components";
import color from "@/lib/color";
import { ICarService } from "@/lib/definitions";
import List from "./List";
import Trim from "../Trim";

const Wrapper = styled.div`
  background: ${color.black};
  color: ${color.silver};
  opacity: 0.75;
  font-size: calc(1em + 1vw);
  padding: 1em;
  height: 100%;
  width: 80vw;
`;
const Title = styled.h4``;
const Price = styled.p``;

interface ICard<Content> {
  bannerColor: string;
  bannerHeight: string;
  content: Content;
}

export default function Card({
  bannerColor = "white",
  bannerHeight = "0.5em",
  content = { title: "", price: "", replace: [], check: [] }
}: ICard<ICarService>) {
  return (
    <Wrapper>
      <Trim color={bannerColor} height={bannerHeight}/>
      <Title>{content.title}</Title>
      <Price>{content.price}</Price>
      <List list={content.replace} />
      <List list={content.check} />
    </Wrapper>
  );
}
