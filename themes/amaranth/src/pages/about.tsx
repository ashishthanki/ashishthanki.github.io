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
        <Helmet title={`About | ${config.website.title}`} />
        <Wrapper>
        <h1>About Ashish Thanki</h1>
        <p>
        <br></br>
        This blog is written by a Data Scientist and professionally registered Mechanical Engineer, Ashish Thanki.
        <br></br>
        <br></br>
        Before becoming a Data Scientist, Ashish was a Mechanical Engineer for WSP in London, where he designed several large commercial office buildings. During his time as a Mechanical Engineer, he was named the Head of Early Professionals, where he served as the leader and played a key role in representing young engineers across the business. Outside of work, he fell in love with Machine Learning and this drove him to transition his career.
        <br></br>
        <br></br>
        This website holds a series of blogs written by Ashish, which will be short enough yet sufficiently technical to increase your competence in the subject; giving insights in:
        <br></br>
        <li>The latest technologies,</li>
        <li>providing tutorial based notebooks, and,</li>
        <li>best working practices in Data Science.</li>
        </p>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AboutPage;