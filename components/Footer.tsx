import styled from "styled-components";

const Wrapper = styled.div``;

export default function Footer() {
  return (
    <Wrapper>
      <footer>
        {`Copyright © ${new Date().getFullYear()} Rock of Ages Software. All Rights Reserved.`}
      </footer>
    </Wrapper>
  );
}
