// import React from "react";
// import { Link } from "react-router-dom";
// // import './Nav.css';


// function Navigation() {
//     return(
//         <React.Fragment>
//             <div className="d-flex flex-row justify-content-around">
//                 <Link to ='/'><h6>Home</h6></Link>
//                 <Link to ='/Products'><h6>Products</h6></Link>
//                 <Link to ='/about'><h6>about Us</h6></Link>
//                 <Link to ='/Footer'><h6>Footer</h6></Link>
//                 <Link to ='/Contact'><h6>Contact</h6></Link>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Navigation;
// import React from "react";
// import { Link } from "react-router-dom";
// import './Nav.css';  // (keep using a separate CSS file)

// function Navigation() {
//     return (
//         <nav className="navbar">
//             <ul className="nav-links">
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to='/Products'>Products</Link></li>
//                 <li><Link to='/about'>About Us</Link></li>
//                 <li><Link to='/FAQS'>FAQS</Link></li>
//                 <li><Link to='/Contact'>Contact</Link></li>
//                 <li><Link to='/Bulk Gifting'>BULK GIFTING</Link></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navigation;


import React from "react";

import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Row, Col, Nav, Navbar, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaUser,
  FaStar,
  FaShoppingBag,
} from 'react-icons/fa';

function Navigation() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={4} className="d-flex align-items-center gap-3 ps-4">
              <FaPhoneAlt /> +91 9619964286
              <FaEnvelope /> operations@thengacoco.com
            </Col>
            <Col md={4} className="text-center fw-semibold">
              Get a Free Coconut Cup on Orders Above Rs 999
            </Col>
            <Col md={4} className="text-end pe-4">
              <Link to="/pinterest" style={{ color: 'inherit' }}>
                     <FaPinterestP />
               </Link>
                        
              <FaFacebookF className="me-2" />

              <Link to="/instagram" style={{ color: 'inherit' }}>
                      <FaInstagram />
               </Link>
               
              <FaYoutube />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="border-bottom py-3 bg-white">
  <Container fluid className="px-4 d-flex justify-content-between align-items-center flex-wrap">
    
    {/* Logo (start/left) */}
    <Navbar.Brand as={Link} to="/" className="me-4">
      <img src="/images/ThengaAura.png" alt="Logo" className="navbar-logo" />
    </Navbar.Brand>

    {/* Nav Links (center, shrinkable) */}
    <Nav className="main-nav flex-grow-1  d-none d-lg-flex flex-wrap gap-2 gaba">
      <Nav.Link as={Link} to="/">HOME</Nav.Link>
      <Nav.Link as={Link} to="/Products">SHOP</Nav.Link>
      <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
      {/* <Nav.Link as={Link} to="/wholesale">WHOLESALE</Nav.Link> */}
      <Nav.Link as={Link} to="/GIFTING">BULK GIFTING</Nav.Link>
      <Nav.Link as={Link} to="/FAQS">FAQS</Nav.Link>
    
      <Nav.Link as={Link} to="/Contact">CONTACT</Nav.Link>
    </Nav>

   
  </Container>
</Navbar>
    </>
  );
}

export default Navigation;