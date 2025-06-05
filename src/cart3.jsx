import images10 from './Images/tab1.webp';
import React, { useState } from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import { Container, Row, Col,   Button, Image, Form,} from 'react-bootstrap';

const CartPages = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const product = state?.product;
  
    const thumbnails = [product?.image]; 
    const [mainImage, setMainImage] = useState(product?.image);
    const [quantity, setQuantity] = useState(1);
  
    if (!product) {
      return <div>Product not found!</div>;
    }
  
    const handleBuyNow = () => {
      navigate('/checkoutForm', { state: { product, quantity } });
    };
  
    const total = product.price * quantity;
  
    return (
      <Container className="product-page mt-5 mb-5">
        <Row>
          <Col md={6}>
            <div className="main-image mb-3">
              <Image src={mainImage} fluid className="rounded" alt="Main product view" />
            </div>
            <div className="thumbnail-row d-flex gap-2">
              {thumbnails.map((thumb, i) => (
                <Image
                  key={i}
                  src={thumb}
                  onClick={() => setMainImage(thumb)}
                  className={`thumbnail-img ${mainImage === thumb ? 'active' : ''}`}
                  alt={`Thumbnail ${i + 1}`}
                />
              ))}
            </div>
          </Col>
  
          <Col md={6}>
            <p className="category-text">DECORS</p>
            <h2 className="product-title">{product.title}</h2>
            <div className="rating-section">
              ⭐⭐⭐⭐⭐ <span className="review-count">{product.reviews} reviews</span>
            </div>
            <p className="description">{product.description}</p>
            <div className="price-section d-flex align-items-center gap-3">
              <span className="price">₹{product.price}</span>
              {product.originalPrice && (
                <span className="original-price text-decoration-line-through text-muted">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
  
            {/* Total Price */}
            <h5 className="mt-3 fw-semibold">Total: ₹{total.toFixed(2)}</h5>
  
            {/* Quantity Input and Buttons */}
            <Form className="mt-3 d-flex gap-2 align-items-center">
              <Form.Control
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="qty-input"
                style={{ width: '70px', textAlign: 'center' }}
              />
              {/* <Button variant="dark">ADD TO CART</Button> */}
              <Button variant="success" onClick={handleBuyNow}>BUY IT NOW</Button>
            </Form>
  
            <div className="delivery-info mt-4">
              <p>📦 Estimated Delivery: May 16 - May 22</p>
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
  export default CartPages;
