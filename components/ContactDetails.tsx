import styled from "styled-components";

interface IContactDetails {
  business: string;
  tel: string;
  email: string;
}

const Wrapper = styled.div``;

export default function ContactDetails({
  business = "",
  tel = "",
  email = ""
}: IContactDetails) {
  return (
    <Wrapper itemScope itemType="https://schema.org/LocalBusiness">
      <h1 itemProp="name">{business}</h1>
      Touch Call:
      <span itemProp="telephone">
        <a href={tel}>{tel}</a>
      </span>
    </Wrapper>
  );
}
