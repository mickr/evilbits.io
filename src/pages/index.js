import GetResume from '../components/GetResume/getResume';
import Main from '../components/Main/main';
import MyStack from '../components/MyStack/MyStack';
import React from 'react'
import Experience from '../components/Experience/experience';
import Connect from '../components/Contact/contact';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges: jobs } } = data;

  return (
    <div>
      <Main />
      <section className="section">
        <MyStack />
      </section>
      <section className="section greenBg">
        <GetResume />
      </section>
      <section className="section">
        <Experience jobs={jobs} />
      </section>
      <footer className="footer">
        <Connect />
        <a href="mailto:mick@evilbits.io">mick at evilbits.io</a> - All Rights
        Reserved {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export const pageQuery = graphql`
query expQuery {
 allMarkdownRemark(
  filter: {fileAbsolutePath: {regex: "/jobs/"}} 
  sort: {fields:[frontmatter___order] order:ASC}) {
  	edges {
      node {
        frontmatter {
          title
          image
          subTitle
        }
        html
      }
    }
  }
}
`;

export default IndexPage
