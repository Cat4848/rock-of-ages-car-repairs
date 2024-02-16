import styled from "styled-components";
import Image from "next/image";
import color from "@/lib/color";
import { values } from "@/lib/valuesData";
import enginePulleysImg from "../assets/engine-pulleys-black-and-white.jpeg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10em;
`;
const Container = styled.div`
  position: absolute;
  bottom: 4em;
  display: flex;
  gap: 1em;
`;
const ValueAndIcon = styled.div<{ $opacity: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
  background: ${color.silver};
  opacity: 0.75;
  color: ${color.black};
  font-size: calc(1em + 1vw);
  height: 10em;
  width: 10em;
`;
const Value = styled.p``;
const Icon = styled.div<{ $scale: number }>`
  scale: ${({ $scale }) => $scale};
`;


const scale = 1.5;

export default function Values() {
  return (
    <Wrapper>
      <Image
        src={enginePulleysImg}
        alt="engine-pulleys-black-and-white"
        priority
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Container>
        {values.map((value, i) => (
          <ValueAndIcon key={i} $opacity={value.opacity}>
            <Icon $scale={scale}>{value.icon}</Icon>
            <Value>{value.name}</Value>
          </ValueAndIcon>
        ))}
      </Container>
    </Wrapper>
  );
}
