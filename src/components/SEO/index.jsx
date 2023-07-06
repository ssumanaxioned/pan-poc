import React from 'react';

const SEOComponent = ({
  title,
  seoImage,
  description,
  slug,
  defaultTitle,
}) => {
  return (
    <>
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
      {seoImage && (
        <meta name='image' property='og:image' content={seoImage} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {seoImage && <meta name='twitter:image' content={seoImage} />}
      <meta name='twitter:creator' content='@Shutterstock' />
      <meta name='twitter:site' content='@Shutterstock' />
      <meta name='referrer' content='no-referrer-when-downgrade' />
      <meta name="google-site-verification" content="6m1O52pRAWZslyMasrD0zdZk2adskOUYm0pk5TC8nto" />
      <link
        rel='canonical'
        href={`${slug
            ? `${process.env.GASTBY_WEBSITE_URL}${slug}/`
            : `${process.env.GASTBY_WEBSITE_URL}`
          }`}
      />
    </>
  );
};

export default SEOComponent;