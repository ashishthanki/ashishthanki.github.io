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
  padding: 32px;
`;

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Consultancy | ${config.website.title}`} />
        <Wrapper>
        <h1>Business & Data Science Consulting</h1>
        <p>
        <br></br>
        <br></br>
        Ashish has experience in data extraction and retrieval. He is proficient in using SQL, Python and AWS. He has extensive experience in geospatial analysis and is able to build automated models using geospatial software such as ESRI ArcGIS.
        <br></br>
        <br></br>
        On the analytical side, Ashish has experience using 'simple' linear to, more advanced, ensemble machine learning models, as well as performing statistical tests. He once performed statistical tests on Hertfordshire County's collision data and identified hypotheses concerning age group and weather type variables.
        <br></br>
        <br></br>
        Finally, Ashish takes pride in clear, intuitive summaries and data visualizations. He is comfortable with public speaking and report writing, and is able to communicate his findings to all levels in the chain of command.

        If these are the types of skills your team needs, please reach out to Ashish.
        </p></Wrapper>
      </div>
    </Layout>
  );
};

export default AboutPage;