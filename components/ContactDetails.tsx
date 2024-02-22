import styled from "styled-components";
import color from "@/lib/color";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

interface IContactDetails {
  type: string;
  countryCode: string;
  mobile: string;
  email: string;
}

const Wrapper = styled.div`
  color: ${color.silver};
`;
const Telephone = styled.div``;
const Email = styled.div``;

export default function ContactDetails({
  type = "",
  countryCode = "",
  mobile = "",
  email = ""
}: IContactDetails) {
  return (
    <Wrapper itemScope itemType="https://schema.org/LocalBusiness">
      <h1 itemProp="name">{type}</h1>

      <Telephone>
        <BsFillTelephoneFill /> {""}
        <span itemProp="telephone">
          <a href={`tel:${countryCode}${mobile}`}>{`0${mobile}`}</a>
        </span>
      </Telephone>

      <Email>
        <HiMail /> {""}
        <span itemProp="email">
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </Email>
    </Wrapper>
  );
}
