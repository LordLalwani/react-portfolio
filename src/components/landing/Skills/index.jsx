import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, ButtonStyleTwo, Card } from "Common";
import data from "Static/illustrations/data.svg";
import skills from "./skill-list.json";
import {
  Wrapper,
  SkillsWrapper,
  Details,
  Thumbnail,
  Content,
  Item,
  Grid
} from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={data} alt="" />
      </Thumbnail>
      <Details>
        <h3>Skills, technology & concepts I have experience in:</h3>
        <Grid>
          {skills.map(({ name, id }) => (
            <Item key={id}>
              <Card>
                <Content>
                  <h5>{name}</h5>
                </Content>
              </Card>
            </Item>
          ))}
        </Grid>
        <div style={{ marginTop: 2 + "em" }}>
          <ButtonStyleTwo as={AnchorLink} href="#contact">
            Get In Touch
          </ButtonStyleTwo>
        </div>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
