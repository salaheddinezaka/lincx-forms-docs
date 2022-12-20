import React from "react";
import Link from "next/link";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";
import { Nav, NavList, NavListItem, NavLink, NavListText } from "./Nav";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import siteMetadata from "../config/siteMetadata";

export function AppNav() {
  return (
    <Nav>
      <NavList>
        {(siteMetadata.navItems || []).map(({ title, url }, index) => (
          <NavListText key={index} padding="0 36px">
            <Link href={url} passHref>
              <NavLink>{title}</NavLink>
            </Link>
          </NavListText>
        ))}
        <NavListItem>
          <NavLink as={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  );
}
