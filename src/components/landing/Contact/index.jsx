import React from "react";
import { Container } from "Common";
import coffee from "Static/illustrations/coffee.svg";
import { Wrapper, Details, Thumbnail } from "./styles";
import ContactForm from "./ContactForm";

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h3>Let's schedule a coffee!</h3>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={coffee} alt="" />
    </Thumbnail>
  </Wrapper>
);
