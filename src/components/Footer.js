import React from "react";
import styled from "styled-components";

const SpacedFooter = styled.div`
  & > p {
    font-size: 0.8em;
  }
  & a {
    color: black;
  }
`;

const Link = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.name}
    </a>
  );
};

const Footer = () => {
  return (
    <SpacedFooter>
      <p>
         <Link link="https://terryfu.ca/" name="terry" />{" "}//
        
      </p>
    </SpacedFooter>
  );
};

export default Footer;