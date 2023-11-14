import IGatsbyImageData from "gatsby-plugin-image";

export type CardTypes = {
  content: {
    title: string;
    shortname: string;
    byline: string;
    slug: string;
    cover: {
      localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
      alternativeText: string;
    };
    excerpt: string;
  };
  breadcrumb: string;
};
