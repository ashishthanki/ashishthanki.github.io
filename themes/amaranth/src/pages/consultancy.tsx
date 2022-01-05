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
        Ashish has experience in data extraction and retrieval. He is proficient in SQL, Python and AWS. He has extensive experience in geospatial analysis and can build automated models using geospatial software such as ESRI ArcGIS. He has extensive experience working with tabular, natural language and image data. 
        <br></br>
        <br></br>
        On the analytical side, Ashish has experience using 'simple' linear to, more advanced, ensemble machine learning models, as well as performing statistical tests. He has performed statistical tests on collision data and has identified hypotheses concerning age group and weather type variables. Ashish is able to build data pipelines and can allow dashboarding of your data.
        <br></br>
        <br></br>
        Finally, Ashish takes pride in clear, intuitive summaries and data visualizations. He is well established within public speaking and report writing and can communicate findings to all levels in the chain of command. 

        If these are skills that your team needs, please do not hesitate to contact Ashish. 

        </p></Wrapper>
      </div>
    </Layout>
  );
};

export default AboutPage;