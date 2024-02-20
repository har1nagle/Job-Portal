import React from 'react'

const NotFound = () => {
  return (
    <section className='page notfound'>
      <div className="content">
        <img src="/notfound.png" alt="notfound" />
        <Link to={"/"}>RETURN TO HOME</Link>
      </div>
    </section>
  )
}

export default NotFound