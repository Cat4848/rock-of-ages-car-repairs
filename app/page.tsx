"use client";

import styled from "styled-components";
import yellowCar from "../assets/yellow-toy-car-in-dramatic-desert-landscape.svg";
import MainImage from "@/components/MainImage";
import CarServices from "@/components/services/CarServices";
import Brakes from "@/components/Brakes";
import Values from "@/components/Values";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const mainImageAlt = "yellow-toy-car-in-dramatic-desert";
  const mainImageText = "Mobile Mechanic in Kent.";
  return (
    <Wrapper>
      <MainImage src={yellowCar} alt={mainImageAlt} text={mainImageText} />
      <CarServices />
      <Brakes />
      <Values />
    </Wrapper>
  );
}
