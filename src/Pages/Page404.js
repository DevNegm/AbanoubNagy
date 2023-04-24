import React from 'react'

function Page404() {
  return (
    <div className="page-404">
    <h1 style={{ textAlign: "center", fontSize: "2em" }}>Page Not Found</h1>
    <p style={{ textAlign: "center", fontSize: "1em" }}>The page you are looking for could not be found.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/404_error_page.png/1200px-404_error_page.png" style={{ display: "block", margin: "0 auto", alt: "404 Error Image" }} />
    <a href="/" style={{ textAlign: "center", fontSize: "1em" }}>Go back to the homepage</a>
  </div>
  )
}

export default Page404