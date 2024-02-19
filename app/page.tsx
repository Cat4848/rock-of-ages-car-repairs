"use client";

import styled from "styled-components";
import yellowCar from "../assets/yellow-toy-car-in-dramatic-desert-landscape.svg";
import MainImage from "@/components/MainImage";
import CarServices from "@/components/services/CarServices";
import Brakes from "@/components/Brakes";
import Values from "@/components/Values";
import Footer from "@/components/Footer";
import color from "@/lib/color";
import { footerText } from "@/lib/footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const footerLogo = "Footer Logo";

export default function Home() {
  const mainImageAlt = "yellow-toy-car-in-dramatic-desert";
  const mainImageText = "Mobile Mechanic in Kent.";
  return (
    <Wrapper>
      <MainImage src={yellowCar} alt={mainImageAlt} text={mainImageText} />
      <CarServices />
      <Brakes />
      <Values />
      <Footer
        backgroundColor={color.black}
        textColor={color.silver}
        text={footerText}
        logo={footerLogo}
      />
    </Wrapper>
  );
}
