import styled from "styled-components";

const Wrapper = styled.ul``;
const Item = styled.li``;

export default function List({ list = [] }: { list: string[] }) {
  return (
    <Wrapper>
      {list.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </Wrapper>
  );
}
