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
        Ashish is a Data Scientist, and was a professionally registered Mechanical Engineer in London, where he designed several large commercial office buildings. During his time as a Mechanical Engineer, he was named the Head of Early Professionals, where he served as the leader and played a key role in representing young engineers across the business. He led the restructuring and formalised numerous processes. During this time outside of work, he fell in love with Machine Learning which drove him to transition his career.
        <br></br>
        <br></br>
        He started working, as a Data Scientist, for the local council where he built and led the automation of data analysis and reporting tools. He drove the motivation and was responsible for integrating AWS data pipelines into multiple projects that included IoT devices and APIs. With his help, the council were able to use it for transport planning, evaluation and government bids.     
        <br></br>
        <br></br>
        Currently, Ashish works with marketing data, where he is part of a data science team working in a SCRUM environment. He contributes towards the data-driven attribution model and mixed media marketing model that aids the decision making for direct to consumer brands. He works closely with product, customer success, sales and software engineering teams to identify and solve key product and client problems.
        <br></br>
        <br></br>
        This website holds a series of blogs written by Ashish, which will be short enough yet sufficiently technical to increase your competence in the subject; giving insights in:
        <br></br>
        <li>The latest technologies,</li>
        <li>providing tutorial based notebooks, and,</li>
        <li>best working practices in Data Science.</li>
        <br></br>
        Feel free to reach out to Ashish if you have any questions.
        </p>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AboutPage;