import styled from "styled-components";
import Card from "./Card";
import color from "@/lib/color";
import { briefServices } from "@/lib/servicesData";

const Wrapper = styled.div``;

export default function Services() {
  return (
    <Wrapper>
      {briefServices.map((item, i) => (
        <Card key={i} bannerColor={color.gold} content={item} />
      ))}
    </Wrapper>
  );
}
