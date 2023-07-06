import React from 'react'
import Wrapper from '../components/wrapper';
import { graphql } from 'gatsby';
import Cards from '../components/cards';

const Series = ({ data }) => {
  const { nodes } = data?.allContentfulSeries;
  return (
    <section>
      <Wrapper>
        <ul className='grid grid-cols-3 gap-5'>
          {
            nodes?.map((item, i) => (
              <Cards key={i} title={item?.pageName} slug={item?.slug} asset={item?.asset} description={item?.description?.description} />
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
    allContentfulSeries(filter: {node_locale: {eq: "en"}}) {
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