import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ isButton = true, title = '', action, href, moreStyle }) => {
  const style = `bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition ${moreStyle}`
  return (
    <>
      {isButton ? (
        <button className={style}>{title}</button>
      ) : (
        <Link to={href} className={style}>
          {title}
        </Link>
      )}
    </>
  )
}

export default Button
