import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
           
              <div className="col-sm-6 col-md-3 item">
              <h3>PRODUCTS</h3>
                <ul>
                  <li>
                    <a href="#">Quartz Powder</a>
                  </li>
                  <li>
                    <a href="#">Quartz Grits</a>
                  </li>
                  <li>
                    <a href="#">Washed Silica sand</a>
                  </li>
                  <li>
                    <a href="#">Ramming Mass</a>
                  </li>
                  <li>
                    <a href="#">Quartz Granules</a>
                  </li>
                </ul>
              </div>
             
              <div className="col-sm-6 col-md-3 item">
              <h3>CONTACT US</h3>
                <ul>
                  <li>
                    <p>Phone No.</p>
                  </li>
                  <li>
                    <p>Email Id</p>
                  </li>
                </ul>
              </div>
                
              <div className="col-md-6 item text">
                <h3>SEEMA INDUSTRIES</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
                </div>
              </div>
              </div>
            <p className="copyright">Seema Industries © 2022</p>
          
        </footer>
      </div>
    </>
  );
}

export default Footer;
