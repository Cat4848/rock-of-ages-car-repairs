import styled from "styled-components";

interface IContactDetails {
  business: string;
  tel: string;
  email: string;
}

const Wrapper = styled.div``;
const Telephone = styled.div``;
const Email = styled.div``;

export default function ContactDetails({
  business = "",
  tel = "",
  email = ""
}: IContactDetails) {
  return (
    <Wrapper itemScope itemType="https://schema.org/LocalBusiness">
      <h1 itemProp="name">{business}</h1>

      <Telephone>
        Touch Call:
        <span itemProp="telephone">
          <a href={tel}>{tel}</a>
        </span>
      </Telephone>

      <Email>
        Touch E-mail:
        <span itemProp="email">
          <a href={email}>{email}</a>
        </span>
      </Email>
    </Wrapper>
  );
}
