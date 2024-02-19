import styled from "styled-components";
import { brakesData } from "@/lib/brakesData";
import Card from "./services/Card";
import color from "@/lib/color";
import { Header2 } from "@/lib/text";
import { bannerHeight } from "@/lib/constants";

const Wrapper = styled.div`
  margin-top: 3em;
`;

export default function Brakes() {
  return (
    <Wrapper>
      <Header2>Brakes Services</Header2>
      {brakesData.map((brake, i) => (
        <Card
          key={i}
          bannerColor={color.gold}
          bannerHeight={bannerHeight}
          content={brake}
        />
      ))}
    </Wrapper>
  );
}
