import styled from "styled-components";
import Card from "./Card";
import color from "@/lib/color";
import { briefServices } from "@/lib/servicesData";

const Wrapper = styled.div``;
const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7em;
`;
const Header = styled.h2``;

export default function Services() {
  return (
    <Wrapper>
      <Header>Services Available</Header>
      <ServicesWrapper>
        {briefServices.map((item, i) => (
          <Card key={i} bannerColor={color.gold} content={item} />
        ))}
      </ServicesWrapper>
    </Wrapper>
  );
}
