import { graphql } from 'gatsby';
import React from 'react'
import Wrapper from '../components/Wrapper';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEOComponent from '../components/SEO';
import Cards from '../components/Cards';

export const Head = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const { seo } = data?.allContentfulSeries?.nodes[0];

  return (
    <SEOComponent title={seo?.title} seoImage={seo?.asset?.url} description={seo?.description} slug={`series/${slug}`} />
  )
}

const Series = ({ data }) => {
  const { pageName, asset, plot, related } = data?.allContentfulSeries?.nodes[0];
  return (
    <section>
      <Wrapper>
        <h2 className='text-4xl font-bold'>{pageName}</h2>
        <figure className='my-5 overflow-hidden'>
          <GatsbyImage image={getImage(asset)} />
        </figure>
        {plot && <p>{plot?.plot}</p>}

        {
          Array.isArray(related) && related.length > 0 &&
          <>
            <h3 className='my-5 text-2xl font-semibold'>Related Series</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
              {
                related.map((item, i) => (
                  <Cards key={i} title={item?.pageName} slug={`/series/${item?.slug}/`} asset={item?.asset} description={item?.description?.description} />
                ))
              }
            </ul>
          </>
        }
      </Wrapper>
    </section>
  )
}

export default Series;

export const pageQuery = graphql`
  query MyQuery($slug: String) {
    allContentfulSeries(filter: {node_locale: {eq: "en"}, slug: {eq: $slug}}) {
      nodes {
        slug
        pageName
        seo {
          title
          description
          asset {
            url
          }
        }
        asset {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
        }
        description {
          description
        }
        plot {
          plot
        }
        related {
          asset {
            gatsbyImageData(width: 500, height: 350, placeholder: BLURRED, formats: WEBP)
          }
          pageName
          slug
          description {
            description
          }
        }
      }
    }
  }
`