import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark header-dark navbar-expand-lg">
        <div className="container-fluid navbar-edit">
            <a className="navbar-brand nav-h" href="#">Seema Industries</a>                 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active nav-a" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link active nav-a dropdown-toggle" href="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item nav-a " href="#">Silica/Quartz Powder</a></li>
                        <li><a className="dropdown-item nav-a " href="#">Quartz Granules</a></li>
                        <li><a className="dropdown-item nav-a " href="#">Ramming Mass</a></li>
                        <li><a className="dropdown-item nav-a " href="#">Quartz Grits</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link active nav-a dropdown-toggle" href="/quartz" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quartz</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item nav-a " href="#">Crystal Quartz</a></li>
                        <li><a className="dropdown-item nav-a " href="#">Rose Quartz</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link active nav-a" href="/mining">Mining</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active nav-a" href="/manufacturing">Manufacturing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active nav-a" href="/contact">Contact Us</a>
                </li>
            </ul>

                {/* <div className="navbar-nav ms-auto"> */}
                  {/* <a className="nav-link active nav-a" aria-current="page" href="#">Home</a> */}
                  {/* <a className="nav-link active nav-a" href="#">Products</a>
                  <a className="nav-link active nav-a" href="#">Quartz</a>
                  <a className="nav-link active nav-a" href="#">Quality</a>
                  <a className="nav-link active nav-a" href="#">Mining</a>
                  <a className="nav-link active nav-a" href="#">Manufacturing</a>
                  <a className="nav-link active nav-a" href="#">Contact Us</a> */}
                {/* </div> */}
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
