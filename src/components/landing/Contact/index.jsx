import React from "react";
import { Container } from "Common";
import contact from "Static/illustrations/contact.svg";
import { Wrapper, Details, Thumbnail } from "./styles";
import ContactForm from "./ContactForm";

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h3>Let's have a chat & schedule a coffee!</h3>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
