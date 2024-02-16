import styled from "styled-components";
import color from "@/lib/color";
import { values } from "@/lib/valuesData";

const Wrapper = styled.div`
  display: flex;
`;
const ValueAndIcon = styled.div<{ $opacity: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
  opacity: ${({ $opacity }) => $opacity};
  background: ${color.black};
  color: ${color.silver};
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
      {values.map((value, i) => (
        <ValueAndIcon key={i} $opacity={value.opacity}>
          <Icon $scale={scale}>{value.icon}</Icon>
          <Value>{value.name}</Value>
        </ValueAndIcon>
      ))}
    </Wrapper>
  );
}
