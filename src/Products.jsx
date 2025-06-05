// import React from 'react';
import React, { useState } from "react";
import { Container, Row, Col, Card,  Button, Image, Form, Modal, Badge,} from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// import { Package, Truck } from 'lucide-react';
import images10 from './Images/tab1.webp';
import images11 from './Images/tab2.webp';
import images12 from './Images/tab3.webp';
import images13 from './Images/tab4.webp';
import images14 from './Images/tab5.webp';
import images15 from './Images/tab6.webp';
import images16 from './Images/tab7.webp';
import images17 from './Images/tab8.webp';
import { useNavigate } from 'react-router-dom';

// tab1 oda sub image
import images101 from './Images/tab11.webp';
import images102 from './Images/tab12.webp';
import images103 from './Images/tab13.webp';

// diwali oda img.
import images104 from './Images/div1.webp';
import images105 from './Images/diw2.webp';
import images106 from './Images/div3.webp';
import images107 from './Images/diw4.webp';
import images108 from './Images/diw5.webp';
import images109 from './Images/diw6.webp';
import images110 from './Images/diw7.webp';
import images111 from './Images/diw8.webp';

// kitchen image
import images112 from './Images/k1.webp';
import images113 from './Images/k2.webp';
import images114 from './Images/k3.webp';
import images115 from './Images/k4.webp';
// import images116 from './RUPAY.png';
import CartSection from './Add to cart'















// export default Products;





const products = [
  {
    id: 1,
    title: "Thenga Artisan Mini Coconut Shell Bowl | For Serving Sauce, Chutney, Dessert Bowl - 150 ML ( Set of 2 )",
    price: 599,
    originalPrice: null,
    image: images10,
    rating: 4.2,
    reviews: 18,
    discount: null
  },
  {
    id: 2,
    title: "Thenga Artisan Coconut Bowl with Spoon | For Smoothie, Cereals, Salads - 500 ML (Set of 1)",
    price: 349,
    originalPrice: 499,
    image: images11,
    rating: 4.1,
    reviews: 17,
    discount: 30
  },
  {
    id: 3,
    title: "Coconut Bowl Combo Set | 900ml + More",
    price: 799,
    originalPrice: 999,
    image: images12,
    rating: 4.0,
    reviews: 10,
    discount: 20
  },
  {
    id: 4,
    title: "Thenga Coconut Shell Eco-friendly Shot/Wine Glass - ( Set of 2 )",
    price: 369,
    originalPrice: 499,
    image: images13,
    rating: 3.8,
    reviews: 12,
    discount: 26
  },
  {
    id: 5,
    title: "Thenga Geometric Jumbo Coconut Bowl with Spoon and Fork 900 ML ( Pack of 1)",
    price: 399,
    originalPrice: 599,
    image: images14,
    rating: 4.3,
    reviews: 8,
    discount: 35
  },
  {
    id: 6,
    title: "Kids Bowl Monkey Design ( Set of 1 )",
    price: 499,
    originalPrice: 649,
    image: images15,
    rating: 4.5,
    reviews: 6,
    discount: 22
  },
  {
    id: 7,
    title: "Thenga coconut wood cutlery - Set of spoon, fork and knife",
    price: 379,
    originalPrice: 529,
    image: images16,
    rating: 4.0,
    reviews: 9,
    discount: 28
  },
  {
    id: 8,
    title: "Thenga Couple Bowls - HIS & HER 500 ML Capacity",
    price: 649,
    originalPrice: 699,
    image: images17,
    rating: 4.6,
    reviews: 15,
    discount: 7
  }
];


const ProductGrids = () => {
  // ⬇️ PLACE THE FILTER LOGIC HERE
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  const tablewareKeywords = ['bowl', 'cutlery', 'spoon', 'fork'];

  const filteredProducts =
    category === 'tableware'
      ? products.filter(product =>
          tablewareKeywords.some(keyword =>
            product.title.toLowerCase().includes(keyword)
          )
        )
      : products;

  return (
    <Container className="py-5" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 className="text-center mb-4 fw-bold">
        {category === 'tableware' ? 'Tableware | Coconut Bowls' : 'All Products'}
      </h2>
      <p className="text-center text-muted mb-4">
        Home &gt; {category === 'tableware' ? 'Tableware' : 'Shop'} &gt; Coconut Products
      </p>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Link
              to={`/product/${product.id}`}
              state={{ product }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card className="h-100 shadow-sm">
                <div style={{ position: 'relative' }}>
                  {product.discount && (
                    <span
                      className="badge bg-success"
                      style={{ position: 'absolute', top: '10px', left: '10px' }}
                    >
                      -{product.discount}%
                    </span>
                  )}
                  <Card.Img variant="top" src={product.image} />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: '1rem' }}>
                    {product.title}
                  </Card.Title>
                  <div style={{ fontSize: '0.9rem', color: '#f39c12' }}>
                    ★★★★☆ ({product.reviews} reviews)
                  </div>
                  <div className="mt-2">
                    <span className="fw-bold">Rs. {product.price.toFixed(2)}</span>{' '}
                    {product.originalPrice && (
                      <span className="text-muted text-decoration-line-through">
                        Rs. {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};



// export default ProductGrid;

// const ProductPage = () => {
//   const thumbnails = [images10, images101, images102, images103];
//   const [mainImage, setMainImage] = useState(images10);

//   return (
//     <Container className="product-page mt-5 mb-5">
//       <Row>
//         <Col md={6}>
//           <div className="main-image mb-3">
//             <Image
//               src={mainImage}
//               fluid
//               className="rounded"
//               alt="Main product view"
//             />
//           </div>
//           <div className="thumbnail-row d-flex gap-2">
//             {thumbnails.map((thumb, i) => (
//               <Image
//                 key={i}
//                 src={thumb}
//                 onClick={() => setMainImage(thumb)}
//                 className={`thumbnail-img ${mainImage === thumb ? 'active' : ''}`}
//                 alt={`Thumbnail ${i + 1}`}
//               />
//             ))}
//           </div>
//         </Col>

//         {/*   right-side product content  */}
      

//         <Col md={6}>
//           <p className="category-text">KITCHEN</p>
//           <h2 className="product-title">
//             Thenga Artisan Coconut Bowl with Spoon | For Smoothie, Cereals, Salads - 500 ML (Set of 1)
//           </h2>
//           <div className="rating-section">
//             ⭐⭐⭐⭐⭐ <span className="review-count">17 reviews</span>
//           </div>
//           <p className="description">
//             Our Coconut Bowl with wooden spoon are handcrafted by artisans and sanded until smooth, then polished with coconut oil, to bring out their natural beauty.
//           </p>
//           <div className="price-section d-flex align-items-center gap-3">
//             <span className="price">₹349.00</span>
//             <span className="original-price">₹499.00</span>
//           </div>

//           <Form className="mt-3 d-flex gap-2 align-items-center">
//             <Form.Control type="number" min="1" defaultValue="1" className="qty-input" />
//             <Button variant="dark">ADD TO CART</Button>
//             <Button variant="success">BUY IT NOW</Button>
//           </Form>

//           <div className="delivery-info mt-4">
//             <p>📦 Estimated Delivery: May 03 - May 07</p>
//             <p>🚚 Free Shipping & Returns: On all orders over ₹499</p>
//           </div>

//           <div className="box-contents mt-4">
//             <h5>Box Contents</h5>
//             <ul>
//               <li>1 bowl & 1 spoon</li>
//               <li>Bowl - 13(L) x 12(W) x 8(H) cm</li>
//               <li>Spoon - 15(L) x 4(W) x 1(H) cm</li>
//               <li>Volume - 500 ml</li>
//               <li>Diameter - 15 cm</li>
//               <li>Weight - 148 g</li>
//             </ul>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


const productss = [
  { id: 1, title: 'Thenga Coconut Shell Diwali Candle/Diya | Eco-Friendly Scented Soy Wax Candles - White (Set of...)', image: images104, rating: 4, reviews: 7, price: 399, originalPrice: 499, discount: 20 },
  { id: 2, title: 'Thenga Coconut Shell Christmas Candles/Diya - Red (Set of 2)', image: images105, rating: 0, reviews: 0, price: 399, originalPrice: 499, discount: 20 },
  { id: 3, title: 'Thenga Hand Carved Coconut Shell Candle Holder - Eco-Friendly Diwali Gifts (Tropical)', image: images106, rating: 5, reviews: 3, price: 499, originalPrice: 699, discount: 28 },
  { id: 4, title: 'Thenga Coconut Shell Diwali Spice Candle/Diya (Set of 2)', image: images107, rating: 5, reviews: 6, price: 399, originalPrice: 599, discount: 33 },
  { id: 5, title: 'Thenga Coconut Shell Candle Combo (2)', image: images110, rating: 0, reviews: 0, price: 359, originalPrice: 499, discount: 28 },
  { id: 6, title: 'Handmade Coconut Shell Christmas Ornaments (Set of 3)', image: images111, rating: 0, reviews: 0, price: 279, originalPrice: 399, discount: 30 },
  { id: 7, title: 'Eco-Friendly Diya Necklace Combo - Set of 3', image: images108, rating: 0, reviews: 0, price: 349, originalPrice: 429, discount: 18 },
  { id: 8, title: 'Diwali Gift Box - Eco Candle and Holder Combo', image: images109, rating: 0, reviews: 0, price: 499, originalPrice: 609, discount: 18 },
];

const renderStars = (rating) => {
  const fullStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);
  return fullStars + emptyStars;
};

const DiwaliCandles = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleTouch = (id) => {
    setActiveImage(id);
    setTimeout(() => setActiveImage(null), 1500);
  };

  return (
    <Container style={{ fontFamily: "'Poppins', sans-serif", padding: '4rem 1rem' }}>
      <h2 className="text-center mb-2" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
        Diwali Candles And Diyas | Eco-Friendly
      </h2>
      <p className="text-center mb-4" style={{ color: '#555' }}>
        Home &nbsp;&gt;&nbsp; <strong>Diwali Candles and Diyas Eco-Friendly</strong>
      </p>

      <Row>
        {productss.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Link
              to={`/cart2`} // Updated to route to CartPage
              state={{ product }} // Passing product data to CartPage
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '300px',
                }}
                onClick={() => handleTouch(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="fade-touch-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Badge
                  bg="success"
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '5px 10px',
                    borderRadius: '4px',
                    backgroundColor: '#d5e8d4',
                    color: '#1e4620',
                  }}
                >
                  -{product.discount}%
                </Badge>
              </div>

              {/* Product info */}
              <div style={{ paddingTop: '10px' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, minHeight: '52px' }}>
                  {product.title}
                </div>
                <div style={{ fontSize: '0.85rem', marginBottom: '4px' }}>
                  <span style={{ color: '#f39c12' }}>{renderStars(product.rating)}</span>
                  &nbsp;
                  <span style={{ color: '#444' }}>
                    {product.reviews > 0 ? `${product.reviews} reviews` : 'No reviews'}
                  </span>
                </div>
                <div style={{ fontWeight: 600 }}>
                  Rs. {product.price.toFixed(2)}
                  {product.originalPrice && (
                    <span
                      style={{
                        textDecoration: 'line-through',
                        color: '#888',
                        fontWeight: 400,
                        fontSize: '0.9rem',
                        marginLeft: '8px',
                      }}
                    >
                      Rs. {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};




const item = [
  {
    id: 1,
    title: 'Thenga Coconut Shell Spoons Sets for Cooking',
    price: 649,
    oldPrice: 699,
    discount: 7,
    rating: 5,
    reviews: 17,
    image: images112,
  },
  {
    id: 2,
    title: 'Thenga Coconut Shell Masala Spoons (Set of 6)',
    price: 399,
    oldPrice: 497,
    discount: 20,
    rating: 5,
    reviews: 2,
    image: images113,
  },
  {
    id: 3,
    title: 'Thenga Coconut Shell Spoon Sets | Frying Spoon & Non Stick Wooden Ladles',
    price: 399,
    oldPrice: 499,
    discount: 20,
    rating: 3,
    reviews: 5,
    image: images114,
  },
  {
    id: 4,
    title: 'Thenga Wooden Coconut Shell Serving Spoon Sets (Set of 2)',
    price: 369,
    oldPrice: 399,
    discount: 7,
    rating: 5,
    reviews: 5,
    image: images115,
  },
];

const KitchenProducts = () => {
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    navigate('/cart3', { state: { product } });
  };

  return (
    <Container className="kitchen-container">
      <h2 className="kitchen-heading">Kitchen</h2>
      <p className="text-center mb-4" style={{ color: '#555' }}>
        Home &nbsp;&gt;&nbsp; <strong>Kitchen</strong>
      </p>
      <Row>
        {item.map((product) => (
          <Col key={product.id} md={6} lg={3} className="mb-4">
            <Card className="product-card">
              <div className="position-relative" style={{ cursor: 'pointer' }} onClick={() => handleImageClick(product)}>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Badge className="discount-badge">-{product.discount}%</Badge>
              </div>
              <Card.Body className="product-card-body">
                <Card.Text className="product-title">{product.title}</Card.Text>
                <div className="rating-reviews">
                  {'★'.repeat(product.rating)}
                  {'☆'.repeat(5 - product.rating)}
                  <span className="review-text">{product.reviews} reviews</span>
                </div>
                <div>
                  <span className="price">Rs. {product.price}.00</span>
                  <del className="old-price">Rs. {product.oldPrice}.00</del>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

function Footer() {
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
                <li> <Link to="/Products" style={{ textDecoration: 'none', color: 'inherit' }}>
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
              <li> 
              <Link to="/products?category=tableware" style={{ textDecoration: 'none', color: 'inherit' }}>
  Tableware
</Link>
              </li>
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










function Pds () {
  return ( 

    <>
   
    <ProductGrids/>

    {/* <ProductPage/> */}
    <DiwaliCandles/>
    <KitchenProducts/>
    <Footer/>
    <CartSection/>
    
    
    </>
   );
}

export default Pds;