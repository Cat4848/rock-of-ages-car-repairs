import styled from "styled-components";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

import color from "@/lib/color";

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

const values = [
  {
    name: "Honest Mechanic",
    icon: <BiSolidCarMechanic />,
    opacity: "0.4"
  },
  {
    name: "Quality Service",
    icon: <FaStar />,
    opacity: "0.5"
  },
  {
    name: "Affordable Prices",
    icon: <FaHandshakeSimple />,
    opacity: "0.6"
  }
];
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
