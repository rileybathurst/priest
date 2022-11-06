import * as React from "react";
import { Link } from "gatsby";

import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Cross from "../components/cross";
import Seo from "../components/seo";

const NewsView = ({ news }) => {
  return (
    <>
      <Seo
        title={news.title}
        description={news.excerpt}
      />
      <Header />
      <HeaderContact />

      <p className="breadcrumbs"><Link to="/">Home</Link> &gt; <Link to="/news">News</Link> &gt; {news.title}</p>

      <Cross />

      <article className="single">
        <p>{news.createdAt}</p>
        <h1>{news.title}</h1>
        <ReactMarkdown
          children={news.content.data.content}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.URI}${uri}`
          }
        />
      </article>

      <Footer />
    </>
  );
};

export default NewsView;
