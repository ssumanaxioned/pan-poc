import * as React from "react"
import Wrapper from "../components/Wrapper"
import { graphql } from "gatsby"
import Cards from "../components/Cards";
import SEOComponent from "../components/SEO";

export const Head = ({ data }) => {
  const seo = data?.allContentfulSeo.nodes[0];

  return (
    <SEOComponent title={seo?.title} description={seo?.description} />
  )
}

const IndexPage = ({ data }) => {
  const movieslist = data?.allContentfulBlogs?.nodes;
  const serieslist = data?.allContentfulSeries?.nodes;
  return (
    <>
      <section>
        <Wrapper>
          <h2 className="text-3xl my-5">Recommended Movies</h2>
          <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
              movieslist?.map((item, i) => (
                <Cards key={i} title={item?.pageName} slug={`/movies/${item?.slug}/`} asset={item?.asset} description={item?.description?.description} />
              ))
            }
          </ul>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <h2 className="text-3xl my-5">Recommended Series</h2>
          <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
              serieslist?.map((item, i) => (
                <Cards key={i} title={item?.pageName} slug={`/series/${item?.slug}/`} asset={item?.asset} description={item?.description?.description} />
              ))
            }
          </ul>
        </Wrapper>
      </section>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allContentfulSeo(filter: {contentful_id: {eq: "6C4Z3rKtGaxt3YtXHIwplU"}}) {
      nodes {
        title
        description
      }
    }
    allContentfulBlogs(filter: {node_locale: {eq: "en"}}, limit: 6) {
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
    allContentfulSeries(filter: {node_locale: {eq: "en"}}, limit: 6) {
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