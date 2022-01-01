import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";
import { Caption, H3 } from "../../theme";
import { AnimatedLink } from "../Links";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <H3>LINKS</H3>
        <UserLinks />
      </S.LinkGrid>
      <S.Info>
        <Caption>
          {" "}
          <AnimatedLink noBasePath to="/">
            Posts
          </AnimatedLink>
           {" | "} 
          <AnimatedLink noBasePath to="/about">
             About
          </AnimatedLink>
          {" | "} 
          <AnimatedLink noBasePath to="/consultancy">
             Consultancy 
          </AnimatedLink>
          {" | "} 
          <AnimatedLink noBasePath to="/certificates">
             Certificates 
          </AnimatedLink>
          {" | "} 
          <AnimatedLink noBasePath to="https://twitter.com/ashish__thanki">
             Twitter 
          </AnimatedLink>
          {" | "} 
          <AnimatedLink noBasePath to="https://www.github.com/ashishthanki">
             GitHub 
          </AnimatedLink>
          {" | "} 
          <AnimatedLink noBasePath to="https://uk.linkedin.com/in/athanki">
             LinkedIn 
          </AnimatedLink>
        </Caption>
        <Caption>{config.website.copyright}</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
