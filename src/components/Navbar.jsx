import React from 'react'

function Navbar() {
  return (
    <>
    <div className='bg-secondary-subtle'>

      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 me-4 sticky-top">
          <div className="col-md-3 mb-2 mb-md-0">
            <a class="navbar-brand text-body-emphasis fs-5" href="#">
              <img src="/img/logo_shop-removebg-preview.png" alt="Logo" width=" 210" height="100" class="d-inline-block mx-2" />
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link home px-5 text-body-emphasis">Home</a></li>
            <li><a href="#" className="nav-link home px-5 text-body-emphasis">Categories</a></li>
            <li><a href="#" className="nav-link home px-5 text-body-emphasis">Men's</a></li>
            <li><a href="#" className="nav-link home px-5 text-body-emphasis">Women's</a></li>
            <li><a href="#" className="nav-link home px-5 text-body-emphasis">Jewelry</a></li>
          </ul>

        </header>
      </div>
      </div>


    </>
  )
}

export default Navbar