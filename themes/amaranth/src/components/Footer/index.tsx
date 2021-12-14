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
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        <Caption>
          {" "}
          <AnimatedLink to="/">
            Ashish Thanki
          </AnimatedLink>
        </Caption>
        <Caption>{config.website.copyright}</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
