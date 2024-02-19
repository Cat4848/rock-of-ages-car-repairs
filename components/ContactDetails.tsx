import styled from "styled-components";

interface IContactDetails {
  type: string;
  tel: string;
  email: string;
}

const Wrapper = styled.div``;
const Telephone = styled.div``;
const Email = styled.div``;

export default function ContactDetails({
  type = "",
  tel = "",
  email = ""
}: IContactDetails) {
  return (
    <Wrapper itemScope itemType="https://schema.org/LocalBusiness">
      <h1 itemProp="name">{type}</h1>

      <Telephone>
        Call {""}
        <span itemProp="telephone">
          <a href={`tel:${tel}`}>{tel}</a>
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
