import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";
import { ButtonStyleThree } from "../../../common/Button";

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">Skills</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
    <ButtonStyleThree>
      <a href="#" onClick={e => downloadCV(e)}>
        Download CV
      </a>
    </ButtonStyleThree>
  </Wrapper>
);

const downloadCV = () => {
  window.open(require("../../../../../static/DeepLalwaniCV.pdf"), "_none");
};
export default NavbarLinks;
