import React from 'react'

const Wrapper = ({ children, customStyle }) => {
  return (
    <div className={`mx-auto max-w-screen-xl w-4/5 py-4 ${customStyle ? customStyle : ""}`}>{children}</div>
  )
}

export default Wrapper;