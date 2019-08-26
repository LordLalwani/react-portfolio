import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Card } from "Common";
import starIcon from "Static/icons/star.svg";
import forkIcon from "Static/icons/fork.svg";
import apiIcon from "Static/icons/api.svg";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";

export const Projects = () => {
  const {
    github: {
      repositoryOwner: {
        repositories: { edges }
      }
    }
  } = useStaticQuery(graphql`
    {
      github {
        repositoryOwner(login: "lordlalwani") {
          repositories(
            first: 8
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            edges {
              node {
                id
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Wrapper as={Container} id="projects">
      <h3>Public Projects</h3>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*/ Taken from github projects*/}
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
      {/*/ Hard Coded personal projects*/}
      <h3>Private Projects</h3>
      <Grid>
        <Item
          key={"1"}
          as="a"
          href={""}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <Content>
              <h4>{"Contact Form Service API"}</h4>
              <p>{"A commercialised form backend, API & email service."}</p>
            </Content>
            <Stats>
              <div>
                <img src={apiIcon} alt="apis" />
                <span>{"Currently in prototyping"}</span>
              </div>
            </Stats>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
