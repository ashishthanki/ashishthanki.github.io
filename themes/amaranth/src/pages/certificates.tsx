import * as React from "react";
import { Helmet } from "react-helmet";
import { useConfig } from "gatsby-theme-advanced";
import Layout from "../layouts";
import styled from "styled-components";

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  const Wrapper = styled.main`
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
`;

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Certificates | ${config.website.title}`} />
        <Wrapper>
        <h1>Certifications</h1>
        <p>
        <br></br>
        The certifications that Ashish has achieved are the following:
        <br></br>
        <br></br>
        <li><a href="https://www.youracclaim.com/badges/0edcedc7-761d-4096-9c1f-0e5d5a4d5de0?source=linked_in_profile">Microsoft: Azure Fundamentals</a></li>
        <li><a href="https://courses.edx.org/certificates/81bef9d107b84843b839010ae2b7d849">Microsoft: Analyzing and Visualizing Data with Power BI</a></li>
        <li><a href="https://courses.edx.org/certificates/fc93f8e5fb4e44b284942a5734eb21c7">Massachusetts Institute of Technology: Sustainable Building Design</a></li>
        </p></Wrapper>
      </div>
    </Layout>
  );
};

export default AboutPage;