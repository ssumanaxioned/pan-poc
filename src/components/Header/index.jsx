import { Link } from 'gatsby-link'
import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 bg-blue-600'>
      <div className='flex justify-between items-center mx-auto max-w-screen-xl w-4/5 py-4'>
        <h1 className='text-2xl'>
          <Link to='/'>
            Demo
          </Link>
        </h1>
        <ul className='flex justify-end space-x-5'>
          <li className='hover:underline'>
            <Link to='/movies'>Movies</Link>
          </li>
          <li className='hover:underline'>
            <Link to='/series'>Series</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header