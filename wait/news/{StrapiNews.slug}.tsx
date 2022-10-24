import * as React from "react"
import { graphql } from "gatsby"
import NewsView from "../../src/views/news-view"

export const query = graphql`
  query NewQuery($slug: String!) {
    strapiNews(slug: { eq: $slug }) {
      id
      title
      slug
      Content
      excerpt
      createdAt(formatString: "D MMMM, YYYY")
    }
  }
`

const NewsPage = ({ data }) => {
  const news = data.strapiNews;
  return (
    <NewsView
      news={news}
    />
  );
};

export default NewsPage;
