import styled from "styled-components";
import color from "@/lib/color";

const Wrapper = styled.div``;
const Paragraph = styled.p`
  margin: 2em 0;
  padding: 2em;
  font-size: 1.4em;
  text-align: justify;
  background: black;
  opacity: 0.75;
  color: ${color.silver};
  width: 90vw;
`;

interface ITextContent {
  text: string;
}
export default function TextContent({ text }: ITextContent) {
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
