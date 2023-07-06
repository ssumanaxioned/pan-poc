import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Cards = ({ title, slug, asset, description }) => {
  return (
    <li className='rounded overflow-hidden shadow-lg'>
      <Link title={title} to={slug}>
        <figure className='h-56 overflow-hidden'>
          <GatsbyImage alt={title} image={getImage(asset)} />
        </figure>
        <div className='px-6 py-4'>
          <h3 className='font-bold text-xl mb-2'>{title}</h3>
          <p className='line-clamp-2 text-gray-700 text-base'>{description}</p>
        </div>
      </Link>
    </li>
  )
}

export default Cards