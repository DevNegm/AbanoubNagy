import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <main>
 <div className="page-404">
    <h2>404</h2>
    <h1 >Page Not Found</h1>
    <p >The page you are looking for could not be found.</p>
    <Link to="/" >Go back to the homepage</Link>
  </div>
    </main>
   
  )
}

export default Page404