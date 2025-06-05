// import Navigation from './Nav';
import React from 'react';
import { Card,Image  } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images03 from './Images/news.webp';
import images06 from './Images/gift7.png';
import images05 from './Images/gift3.png';
import images009 from './Images/new.webp';
import images10 from './Images/new1.webp';
import images11 from './Images/new2.webp';
import { Link,  } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';





const articles = [
    {
        title: "Thenga's Artisan Revolution: Balancing Family and Finances in Rural Kerala",
        desc: "Thenga’s sustainable coconut shell products are revolutionising local communities in rural Kerala...",
        img: images03,
        link: '/thenga-artisan-revolution' 
    },
    {
      title: "How to Drive Change Through Meaningful Corporate Gifts",
      desc: "How choosing eco-friendly corporate gifts can help your organisation drive positive social change...",
      img: images05,
      link:'/thenga-artisan-revolution' 
    },
    {
      title: "Sustainable Solutions: The Beauty of Coconut Shell Kitchen Products",
      desc: "Filling your kitchen with natural eco-friendly kitchen products can have lasting benefits for you and...",
      img: images06,
      link: '#'
    },
  ];
  
  const NewsSection = () => {
    return (
      <Container className="news-section py-5">
        <h1 className="text-center mb-4 section-title">News</h1>
        <div className="text-center mb-5 breadcrumb">
          <span className='vivo'>Home</span> <span className="mx-2 vivo">&gt;</span> <span>News</span>
        </div>
        <Row>
  {articles.map((item, index) => (
    <Col md={4} className="mb-4" key={index}>
      <Card className="h-100 news-card shadow-sm">
        <div className="news-image-wrapper">
          <Card.Img variant="top" src={item.img} />
        </div>
        <Card.Body>
          <Card.Title className="news-title">{item.title}</Card.Title>
          <Card.Text className="news-desc">{item.desc}</Card.Text>

          
          <Link to={item.link} className="read-more">READ MORE</Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </Container>
    );
  };


  const ArtisanFeature = () => {
    return (
      <Container className="mt-5" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: '1.8' }}>
        {/* Top Section (my Code) */}
        <div className="text-center mb-5">
          <Image
            src={images009} 
            alt="Artisan working on coconut shell"
            fluid
            rounded
            className="shadow-sm"
          />
          <p
            style={{
              fontSize: '1.2rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
            Thenga's Artisan Revolution: Balancing Family and Finances in<br />Rural Kerala
          </p>
        </div>
  
        {/* Article Content Section */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <h4 style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '1rem' }}>
              Thenga’s sustainable coconut shell products are revolutionising local communities in rural Kerala
            </h4>
            <p>
              In the lush plains of Palakkad in Kerala, fringed by mountains, coconut farms flourish. The tall palms
              shoot up to the sky bearing large coconuts that fuel the local economy here. The coconut is a symbol of
              Kerala – which roughly translates to land of coconuts. It is considered a kalpavriksha with uses for all its parts.
            </p>
            <p>
              Palakkad thrives on coconut and its related industries – oil, coir etc.
            </p>
            <p>
              However, one part of the coconut tree goes by largely underutilised. It is not uncommon to see piles of coconut shells
              slowly decomposing in landfills near coconut oil units. These units mainly use the shells to light rudimentary fires
              and dump the rest in landfills. Seeing the fate of this versatile and sturdy natural material, Maria Kuriakose founded
              Thenga fueling an artisan revolution in the state.
            </p>
  
            <h5 className="mt-4 mb-3" style={{ fontWeight: 'bold' }}>Rural Employment</h5>
            <Image
              src={images10} 
              alt="Artisan at work on coconut shell"
              fluid
              rounded
              className="shadow-sm"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            
              
            /> <br />
            <p>Kerala, despite scoring high on human development indices and literacy, has always had an employment problem. This accounts for the large number of malayalis leaving the state in search of employment.

By transforming discarded coconut shells into beautiful utility products, Thenga currently employs 16 artisans, including 12 women and 4 men in rural Kerala. Many of them make the coconut shell products out of their homes thereby giving them the flexibility to manage their family and profession. Out of work artisans are getting much deserved attention for their craft while earning a good income to manage their expenses and save for the future. </p>

            <h5 className="mt-4 mb-3" style={{ fontWeight: 'bold',fontFamily:"'Open Sans', sans-serif;" }}>Boosting handicraft sectort</h5>
            <Image
              src={images11} 
              alt="Artisan at work on coconut shell"
              fluid
              rounded
              className="shadow-sm"
              style={{ maxHeight: '500px', objectFit: 'cover' }}

              
            />

          </Col>
        </Row>
      </Container>
    );
  };

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
              <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Home
            </Link>
              </li>
              <li>
           <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                  About
          </Link>
             </li>
                 <li>
           <Link to="/Products" style={{ textDecoration: 'none', color: 'inherit' }}>
                 shop
           </Link>
                </li>
           <Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                 Contact
           </Link>
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
              {/* <ul className="footer-links"> */}
            <li>
             <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                       Login & Account
             </Link>
             </li>
              <li>
              <Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Privacy Policy
              </Link>
              </li>
      
  
            <li>
            <Link to="/refund-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
                       Refund Policy
           </Link>
          </li>
          <Link to="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
    Terms & Conditions
  </Link>
                <li>Track Your Order</li>
              </ul>
            </Col>
          </Row>
  
          <div className="footer-bottom">
            <p>© THENGAAURA 2025. Site by <span className="agency-name">abox Agency</span></p>
            <div className="social-icons">
             <Link to="/pinterest" style={{ color: 'inherit' }}>
                          <FaPinterestP />
                      </Link>
            
                         <Link to="/instagram" style={{ color: 'inherit' }}>
                          <FaInstagram />
                          </Link>
              <FaYoutube />
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
  

  // export { NewsSection, ArtisanFeature,Footer };

  function Bowl () {
    return ( 
      <>
      <NewsSection/>
      <ArtisanFeature/>
      <Footerr/>
      </>
     );
  }
  
  export default Bowl ;
  


