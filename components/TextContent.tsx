import styled from "styled-components";

const Wrapper = styled.div``;
const Paragraph = styled.p``;

interface ITextContent {
  text: string;
}
export default function TextContext({ text }: ITextContent) {
  const content = text.split("\n");
  return (
    <Wrapper>
      {content.map((paragraph, i) => {
        if (!paragraph) return;
        return <Paragraph key={i}>{paragraph}</Paragraph>;
      })}
    </Wrapper>
  );
}
