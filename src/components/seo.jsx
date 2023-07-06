import React from 'react';

const SEOComponent = ({
  title,
  seoImage,
  keywords,
  description,
  slug,
  defaultTitle,
}) => {
  return (
    <Head>
      {title ? <title>{title}</title> : <title>{defaultTitle}</title>}
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {description && (
        <meta name='description' lang='en' content={description} />
      )}
      {title && <meta name='title' content={title} />}
      <meta name='robots' content='index,follow' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='article' />
      {title && <meta property='og:title' content={title} />}
      {description && <meta property='og:description' content={description} />}
      <meta
        property='og:url'
        content={`${slug
            ? `${process.env.GASTBY_WEBSITE_URL}${slug}`
            : `${process.env.GASTBY_WEBSITE_URL}`
          }`}
      />
      {seoImage?.url && (
        <meta name='image' property='og:image' content={seoImage?.url} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {seoImage?.url && <meta name='twitter:image' content={seoImage?.url} />}
      <meta name='twitter:creator' content='@Shutterstock' />
      <meta name='twitter:site' content='@Shutterstock' />
      <meta name='referrer' content='no-referrer-when-downgrade' />
      {process.env.GASTBY_SEARCH_CONSOLE && (
        <meta
          name='google-site-verification'
          content={process.env.GASTBY_SEARCH_CONSOLE}
        />
      )}
      <link
        rel='canonical'
        href={`${slug
            ? `${process.env.GASTBY_WEBSITE_URL}${slug}`
            : `${process.env.GASTBY_WEBSITE_URL}`
          }`}
      />
    </Head>
  );
};

export default SEOComponent;