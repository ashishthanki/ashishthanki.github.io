import { useConfig } from "gatsby-theme-advanced";
import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { AnimatedLink } from "../components/Links/styles";
import Layout from "../layouts";

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
        Ashish is a data scientist working works with marketing data, where he has worked in both SCRUM and AGILE environments. He contributes towards the data-driven attribution model and mixed media marketing model that aids the decision making for direct to consumer brands. He works closely with product, customer success, sales and software engineering teams to identify and solve key product and client problems.
        <br></br>
        <br></br>
        Ashish is a data scientist, and was a professionally registered Mechanical Engineer in London, where he designed several large commercial office buildings. During his time as a Mechanical Engineer, he was named the Head of Early Professionals, where he served as the leader and played a key role in representing young engineers across the business. He led the restructuring and formalised numerous processes. During this time outside of work, he fell in love with Machine Learning which drove him to transition his career.
        <br></br>
        <br></br>
        He started working, as a data scientist, for the local council where he built and led the automation of data analysis and reporting tools. He drove the motivation and was responsible for integrating AWS data pipelines into multiple projects that included IoT devices and APIs. With his help, the council were able to use it for transport planning, evaluation and government bids.     
        <br></br>
        <br></br>
        This website holds a series of blogs written by Ashish, which will be short enough yet sufficiently technical to increase your competence in the subject; giving insights in:
        <br></br>
        <li>The latest technologies,</li>
        <li>providing tutorial based notebooks, and,</li>
        <li>best working practices in Data Science.</li>
        <br></br>
        <h2>About Ashish's Hands-on Experience</h2>
        <br></br>
        Ashish has experience in data extraction and retrieval. He is proficient in SQL, Python and AWS. He has extensive experience in geospatial analysis and can build automated models using geospatial software such as ESRI ArcGIS. He has extensive experience working with tabular, natural language and image data. 
        <br></br>
        <br></br>
        On the analytical side, Ashish has experience using 'simple' linear to, more advanced, ensemble machine learning models, as well as performing statistical tests. He has performed statistical tests on collision data and has identified hypotheses concerning age group and weather type variables. Ashish is able to build data pipelines and can allow dashboarding of your data.
        <br></br>
        <br></br>
        Finally, Ashish takes pride in clear, intuitive summaries and data visualizations. He is well established within public speaking and report writing and can communicate findings to all levels in the chain of command. 
<br></br>
<br></br>
            <h2>Certifications</h2>
            <p>
              <br></br>
              Ashish has achieved the following accredited certifications:
              <br></br>
              <br></br>
              <li><AnimatedLink href="https://www.yAnimatedLinkuracclaim.com/badges/0edcedc7-761d-4096-9c1f-0e5d5a4d5de0?source=linked_in_profile">Microsoft: Azure Fundamentals</AnimatedLink></li>
              <li><AnimatedLink href="https://courses.edx.org/certificates/81bef9d107b84843b839010ae2b7d849">Microsoft: Analyzing and Visualizing Data with Power BI</AnimatedLink></li>
              <li><AnimatedLink href="https://courses.edx.org/certificates/fc93f8e5fb4e44b284942a5734eb21c7">Massachusetts Institute of Technology: Sustainable Building Design</AnimatedLink></li>
              <li><AnimatedLink href="https://coursera.org/share/1a86eab386d1c66f418b3ef1b73915e8">Meta Marketing Science</AnimatedLink></li>
            </p>
        <br></br>
        Feel free to reach out to Ashish if you have any questions.
        </p>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AboutPage;