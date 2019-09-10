import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "Theme";
import { Container } from "Common";
import dev from "Static/illustrations/dev2.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import TextLoop from "react-text-loop";

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>My name is Deep Lalwani and</h4>
        <h4 style={{ display: "inline", lineHeight: "normal" }}>I'm </h4>
        <TextLoop interval={3000}>
          <h4>a passionate engineer!</h4>
          <h4>a coffee addict...</h4>
          <h4>hungry for growth.</h4>
          <h4>a software engineer!</h4>
          <h4>a data nerd.</h4>
          <h4>a ReactJS fan!</h4>
          <h4>a creative creature.</h4>
        </TextLoop>
      </Details>
      <Thumbnail>
        <img src={dev} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
