import React from 'react'
import { graphql } from 'gatsby';
import Cards from '../components/Cards';
import Wrapper from '../components/Wrapper';
import SEOComponent from '../components/SEO';

export const Head = ({ data }) => {
  const seo = data?.allContentfulSeo.nodes[0];

  return (
    <SEOComponent title={seo.title} description={seo.description} slug="series" />
  )
}

const Series = ({ data }) => {
  const { nodes } = data?.allContentfulSeries;
  return (
    <section>
      <Wrapper>
        <h2 className='my-5 text-4xl font-semibold'>Series List</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {
            nodes?.map((item, i) => (
              <Cards key={i} title={item?.pageName} slug={`/${item?.slug}/`} asset={item?.asset} description={item?.description?.description} />
            ))
          }
        </ul>
      </Wrapper>
    </section>
  )
}

export default Series;

export const pageQuery = graphql`
  query MyQuery {
    allContentfulSeo(filter: {contentful_id: {eq: "4X9YrpCtVkVPTYPCtoj3ug"}}) {
      nodes {
        title
        description
      }
    }
    allContentfulSeries(filter: {node_locale: {eq: "en"}}) {
      nodes {
        slug
        pageName
        asset {
          gatsbyImageData(width: 500, height: 350, placeholder: BLURRED, formats: WEBP)
        }
        description {
          description
        }
      }
    }
  }
`