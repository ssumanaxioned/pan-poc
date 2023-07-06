import React from 'react'
import Wrapper from '../components/wrapper';
import Cards from '../components/cards';
import { graphql } from 'gatsby';

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