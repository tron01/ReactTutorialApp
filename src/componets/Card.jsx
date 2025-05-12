import React from 'react'

function Card({title,desc}) {
  return (
    <div>
      <h1 className='p-2 bg-dark text-white m-2'> {title} </h1>
      <p className='p-4'> {desc} </p>
    </div>
  )
}

export default Card