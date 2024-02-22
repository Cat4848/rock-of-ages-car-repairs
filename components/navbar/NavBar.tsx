"use client";

import styled from "styled-components";
import LinkWrapper from "../LinkWrapper";
import color from "@/lib/color";
import ContactDetails from "../ContactDetails";
import { business } from "@/lib/business";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: ${color.black};
  color: ${color.gold};
  padding: 1vmin 1 vmin;
  height: 10em;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1vw + 2lh);
  justify-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 2vmin;
  padding-bottom: 0.2lh;
  font-size: calc(0.7rem + 1vw);
`;

const BottomTrim = styled.div``;

interface INavBarItem {
  href: string;
  linkName: string;
}

interface INavBar {
  navbarItems?: INavBarItem[];
  logo?: React.ReactNode | string;
  children: React.ReactNode;
}

export default function NavBar({
  navbarItems = [],
  logo = "Your Logo Here",
  children = <div></div>
}: INavBar) {
  return (
    <Wrapper>
      <Links>
        <LinkWrapper href="/">{logo}</LinkWrapper>
        <ContactDetails
          type={business.type}
          countryCode={business.countryCode}
          mobile={business.mobile}
          email={business.email}
        />
        {navbarItems.map((item) => (
          <LinkWrapper href={`/${item.href}`} key={item.href}>
            {item.linkName}
          </LinkWrapper>
        ))}
      </Links>
      <BottomTrim>{children}</BottomTrim>
    </Wrapper>
  );
}
