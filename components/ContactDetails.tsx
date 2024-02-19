import styled from "styled-components";

interface IContactDetails {
  type: string;
  countryCode: string;
  mobile: string;
  email: string;
}

const Wrapper = styled.div``;
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
        Call {""}
        <span itemProp="telephone">
          <a href={`tel:${countryCode}${mobile}`}>{`0${mobile}`}</a>
        </span>
      </Telephone>

      <Email>
        e-mail {""}
        <span itemProp="email">
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </Email>
    </Wrapper>
  );
}
