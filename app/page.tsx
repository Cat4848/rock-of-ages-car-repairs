import yellowCar from "../assets/yellow-toy-car-in-dramatic-desert-landscape.svg";
import MainImage from "@/components/MainImage";

export default function Home() {
  const mainImageAlt = "yellow-toy-car-in-dramatic-desert";
  const mainImageText = "Mobile Mechanic in Kent.";
  return <MainImage src={yellowCar} alt={mainImageAlt} text={mainImageText} />;
}
