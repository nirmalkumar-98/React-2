
import images10 from './Images/tab1.webp';
// tab1 oda sub image

import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col,   Button, Image, Form, Badge} from 'react-bootstrap';
import './App.css';
import React, { useState, useEffect } from 'react'; 

import images101 from './Images/tab11.webp';
import images102 from './Images/tab12.webp';
import images103 from './Images/tab13.webp';





const ProductPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (product?.image) {
      setMainImage(product.image);
    }
    if (product?.price) {
      setTotal(product.price * quantity);
    }
  }, [product]);

  useEffect(() => {
    if (product?.price) {
      setTotal(product.price * quantity);
    }
  }, [quantity, product]);

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product, quantity } });
  };

  const handleAddToCart = () => {
    navigate('/cart', { state: { product, quantity } }); // Navigate to cart
  };

  if (!product) {
    return (
      <Container className="mt-5 mb-5 text-center">
        <h2>Product not found</h2>
        <p>We couldn't find the product you're looking for.</p>
      </Container>
    );
  }

  return (
    <Container className="product-page mt-5 mb-5">
      <Row>
        <Col md={6}>
          <div className="main-image mb-3">
            <Image src={mainImage} fluid className="rounded" alt="Main product view" />
          </div>
        </Col>

        <Col md={6}>
          <p className="category-text">KITCHEN</p>
          <h2 className="product-title">{product.title}</h2>

          <div className="rating-section mb-2">
            ⭐⭐⭐⭐ ({product.reviews} reviews)
          </div>

          <p className="description">
            Our Coconut Bowl with wooden spoon is handcrafted by artisans and sanded until smooth, then polished with coconut oil to bring out its natural beauty.
          </p>

          <div className="price-section d-flex align-items-center gap-3 mb-3">
            <span className="price fw-bold">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price text-muted text-decoration-line-through">
                ₹{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <h5 className="fw-semibold mb-2">Total: ₹{total.toFixed(2)}</h5>

          <Form className="mt-3 d-flex gap-2 align-items-center">
            <Form.Control
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="qty-input"
            />
            <Button variant="dark" onClick={handleAddToCart}>ADD TO CART</Button>
            <Button variant="success" onClick={handleBuyNow}>BUY IT NOW</Button>
          </Form>

          <div className="delivery-info mt-4">
            <p>📦 Estimated Delivery: May 03 - May 07</p>
            <p>🚚 Free Shipping & Returns: On all orders over ₹499</p>
          </div>

          <div className="box-contents mt-4">
            <h5>Box Contents</h5>
            <ul>
              <li>1 bowl & 1 spoon</li>
              <li>Bowl - 13(L) x 12(W) x 8(H) cm</li>
              <li>Spoon - 15(L) x 4(W) x 1(H) cm</li>
              <li>Volume - 500 ml</li>
              <li>Diameter - 15 cm</li>
              <li>Weight - 148 g</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default ProductPage;