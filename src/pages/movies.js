import React from 'react'
import Cards from '../components/Cards';
import { graphql } from 'gatsby';
import Wrapper from '../components/Wrapper';
import SEOComponent from '../components/SEO';

export const Head = ({ data }) => {
  const seo = data?.allContentfulSeo.nodes[0];

  return (
    <SEOComponent title={seo.title} description={seo.description} slug="series" />
  )
}

const Movies = ({ data }) => {
  const list = data?.allContentfulBlogs?.nodes;
  return (
    <section>
      <Wrapper>
        <ul className='grid grid-cols-3 gap-5'>
          {
            list?.map((item, i) => (
              <Cards key={i} title={item?.pageName} slug={item?.slug} asset={item?.asset} description={item?.description?.description} />
            ))
          }
        </ul>
      </Wrapper>
    </section>
  )
}

export default Movies;

export const pageQuery = graphql`
  query MyQuery {
    allContentfulSeo(filter: {contentful_id: {eq: "69BbLqrPOeNQxFPInmSDwC"}}) {
      nodes {
        title
        description
      }
    }
    allContentfulBlogs(filter: {node_locale: {eq: "en"}}) {
      nodes {
        slug
        pageName
        asset {
          gatsbyImageData(width: 500, placeholder: BLURRED, formats: WEBP)
        }
        description {
          description
        }
      }
    }
  }
`