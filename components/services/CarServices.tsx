import styled from "styled-components";
import Card from "./Card";
import color from "@/lib/color";
import { carServices } from "@/lib/carServicesData";
import { Header2 } from "@/lib/text";
import { bannerHeight } from "@/lib/constants";

const Wrapper = styled.div`
  margin-top: 3em;
`;

export default function CarServices() {
  return (
    <Wrapper>
      <Header2>Car Services</Header2>
      {carServices.map((item, i) => (
        <Card
          key={i}
          bannerColor={color.gold}
          bannerHeight={bannerHeight}
          content={item}
        />
      ))}
    </Wrapper>
  );
}
