import * as React from "react"
import { graphql } from "gatsby"
import NewsView from "../../views/news-view"

export const query = graphql`
  query NewQuery($slug: String!) {
    strapiNew(slug: { eq: $slug }) {
      id
      title
      slug
      content {
        data {
          content
        }
      }
      excerpt
      createdAt(formatString: "D MMMM, YYYY")
    }
  }
`

const NewsPage = ({ data }) => {
  const news = data.strapiNew;
  return (
    <NewsView
      news={news}
    />
  );
};

export default NewsPage;
