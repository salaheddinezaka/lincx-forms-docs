import React from "react";
import DesktopLogo from "../assets/logo-desktop.svg";
import MobileLogo from "../assets/logo-mobile.svg";
import SearchIcon from "../assets/search.svg";
import styled, { x, up, css } from "@xstyled/styled-components";
import { ScreenContainer } from "./ScreenContainer";
import { NavLink } from "./Nav";
import { AppNav } from "./AppNav";

import siteMetadata from "../config/siteMetadata";
import Link from "next/link";

const OuterHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1.25rem 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  ${up(
    "sm",
    css`
      padding: 1.25rem 1.5rem;
    `
  )}
  ${up(
    "lg",
    css`
      padding: 1.25rem 2rem;
    `
  )}
`;

const NavSkipLink = styled.a`
  text-decoration: none;
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;
  color: primary;

  &:focus {
    background-color: background;
    border-radius: base;
    left: auto;
    top: auto;
    height: auto;
    width: max-content;
    overflow: auto;
    padding: 2;
    margin: 2;
    text-align: center;
    z-index: 999;
  }
`;

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-slate-900/5 transition duration-500 shadow-none sm:px-6 lg:px-8 bg-[var(--xstyled-colors-background,#ffffff)] backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-[var(--xstyled-colors-background,#ffffff)]/75">
      <div class="relative flex flex-grow basis-0 items-center">
        <Link aria-label="Home page" href="/">
          <>
            <DesktopLogo className="hidden h-9 w-auto  fill-sky-100 lg:block" />
            <MobileLogo className="h-9 w-9 lg:hidden" />
          </>
        </Link>
      </div>
      <div class="-my-5 mr-6 sm:mr-8 md:mr-0">
        <button
          type="button"
          class="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200  md:bg-slate-800/75 md:ring-inset md:ring-white/5 md:hover:bg-slate-700/40 md:hover:ring-slate-500 lg:w-96"
        >
          <SearchIcon className="h-5 w-5 flex-none  group-hover:fill-slate-500 fill-slate-500 md:group-hover:fill-slate-400" />
          <input
            type="text"
            placeholder="Search docs"
            className="sr-only md:not-sr-only md:ml-2  md:text-slate-400 focus:outline-none outline-none bg-transparent"
          />

          <kbd class="ml-auto hidden font-medium  text-slate-500 md:block">
            <kbd class="font-sans">⌘</kbd>
            <kbd class="font-sans">K</kbd>
          </kbd>
        </button>
      </div>
    </header>
  );
}
