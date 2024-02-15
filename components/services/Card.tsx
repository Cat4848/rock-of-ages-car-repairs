import styled from "styled-components";
import color from "@/lib/color";

const Wrapper = styled.div`
  background: ${color.black};
  opacity: 0.7;
`;

const Banner = styled.div``;
const Title = styled.h4``;
const Price = styled.div``;
const List = styled.ul;
const Item = styled.li;

interface ICard{
  bannerColor: string;
  title: string;
  price: string;
  content: 
}

export default function Card({}){
  return (
    <Wrapper>
    </Wrapper>
  )
}