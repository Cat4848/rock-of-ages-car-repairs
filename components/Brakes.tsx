import styled from "styled-components";
import { brakesData } from "@/lib/brakesData";
import Card from "./services/Card";
import color from "@/lib/color";

const Wrapper = styled.div``;

export default function Brakes() {
  return (
    <Wrapper>
      {brakesData.map((brake, i) => (
        <Card key={i} bannerColor={color.gold} content={brake} />
      ))}
    </Wrapper>
  );
}
