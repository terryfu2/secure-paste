import styled from "styled-components";
import React from "react";
import Footer from "./Footer";

const Logo = styled.div`
  position: fixed;
  top: 1em;
  left: 2em;
  opacity: 0.3;
  transition: opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    opacity: 1;
  }
  & > h1 {
    font-size: 40px;
    margin: 0 0;
    & > a {
      text-decoration: none;
      position: relative;
      color: black;
    }
  }
  @media (max-width: 960px) {
    position: relative;
    display: grid;
    left: -6em;
    font-size: 10px;
  }
`;
export const Watermark = () => (
  <Logo>
    <h1>
      <a href="https://github.com/terryfu2">secure-paste</a>
    </h1>
    <Footer />
  </Logo>
);