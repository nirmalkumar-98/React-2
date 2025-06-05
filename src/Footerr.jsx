import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Footerr() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md={3} className="footer-about">
              <img src="/images/ThengaAura.png" alt="Thenga Aura" className="footer-logo" />
              <p>
                Thenga Aura is a homegrown brand from Kerala that repurposes coconut waste into lasting, sustainable, and handmade home products.
              </p>
            </Col>
  
            <Col md={3}>
              <h5>Store</h5>
              <ul className="footer-links">
                <li>Home</li>
                  <li>
              <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                  About
                </Link>
              </li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </Col>
  
            <Col md={3}>
              <h5>Collections</h5>
              <ul className="footer-links">
                <li>Tableware</li>
                <li>Decor</li>
                <li>Kitchen</li>
                <li>Home & Garden</li>
                <li>Gifting</li>
              </ul>
            </Col>
  
            <Col md={3}>
              <h5>Help</h5>
              <ul className="footer-links">
              <li>
           <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                     Login & Account
           </Link>
           </li>
                
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Terms & Conditions</li>
                <li>Track Your Order</li>
              </ul>
            </Col>
          </Row>
  
          <div className="footer-bottom">
            {/* <p>© THENGAAURA 2025. Site by <span className="agency-name">abox Agency</span></p> */}
            <div className="social-icons">
            <Link to="/pinterest" style={{ color: 'inherit' }}>
              <FaPinterestP />
          </Link>

             <Link to="/instagram" style={{ color: 'inherit' }}>
              <FaInstagram />
              </Link>
             <Link to="/facebook" style={{ color: 'inherit' }}>
              <FaFacebookF />
            </Link>

            <Link to="/youtube" style={{ color: 'inherit' }}>
              <FaYoutube />
            </Link>
            </div>
          </div>
  
          <div className="floating-icons">
            <FaWhatsapp className="float-icon whatsapp" />
            <div className="chat-icon-wrapper">
              <FaRegCommentDots className="float-icon chat" />
              {/* <span className="chat-badge">1</span> */}
            </div>
          </div>
        </Container>
      </footer>
    );
  }
  export default Footerr;