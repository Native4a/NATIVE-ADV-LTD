import { graphql, useStaticQuery } from 'gatsby';

const useAddCases = () => {
  const {
    allContentfulCases: { nodes }
  } = useStaticQuery(graphql`
      query AddCasesQL {
        allContentfulCases(sort: {order: ASC}) {
          nodes {
            order
            title
            description
            slug
            url
            image {
              url
            }
          }
        }
      }
  `);
  return nodes;
};

export default useAddCases;