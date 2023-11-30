// * search disallowed by robots.txt
// Waiting on content from client

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";

const ProcessPage = () => {

  const { allStrapiProcess } = useStaticQuery(graphql`
    query ProcessQuery {
      allStrapiProcess {
        nodes {
          id
          name
        }
      }
    }
  `)

  console.log(allStrapiProcess);
  console.log(allStrapiProcess.nodes);

  return (
    <>
      <Header />
      <HeaderContact />

      <main className="container">

        <h1 className='albatross'>
          Process
        </h1>
        {allStrapiProcess.nodes.map((document: {
          id: string;
          name: string;
        }) => (
          <div key={document.id} className='albatross'>
            <h2>{document.name}</h2>
          </div>
        ))}


      </main>
      <Footer />
    </>
  );
};

export default ProcessPage;
