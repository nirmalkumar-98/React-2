


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Component from './nirmal';
import Products from './Products';
import About from './about';
import  Faqs from './FAQS';
import Contacts from './Contact';
import BULK from './BulkGifting';
import GIFT from './GIFTING';
import { ProductGrid, BulkGiftForm } from './GIFTING';
import LoginPage from './Login'; 
import Footer from './nirmal';

// import Foote from './BLOGS'
// import Foot from './BulkGifting'
import RegisterPage from './REGISTER'
import Home from './Home';  
import CartSection from './Add to cart'; 
import CartPagess from './Add to cart 2';
 
 
import PrivacyPolicy from './Privacypolicy';
import PinterestProfile from './Pinrest';
import InstagramProfile from './Instagram';
import CocoProfile from './Facebook';

import ReturnPolicy from './Refund';
import TermsConditions from './Terms';
import ProductGrids from './Products';
import ProductPage from './products cart';
import CartPage from './cart2';
import ProductPages from './cart3';
import CheckoutForm from './CheckoutForm';
import CartPages from './cart3';
import KitchenProducts from './Products';
import productList from './productData';













function App() { 
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Component />} />
        <Route path='/products' element={<Products />} />
        <Route path='/faqs' element={< Faqs />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/bulkgifting' element={<BULK />} />
       
        <Route path='/Gifting' element={<GIFT />} /> 
       
        
        <Route path="/gifting" element={<ProductGrid />} />
        <Route path="/bulk-gift-form" element={<BulkGiftForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/nirmal" element={< Footer  />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path='/about' element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/pinterest" element={<PinterestProfile />} />
        <Route path="/instagram" element={<InstagramProfile />} />
        <Route path="/facebook" element={<CocoProfile />} />
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/refund-policy" element={<ReturnPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/products cart" element={<ProductGrids />} /> */}
        <Route path="/products" element={<ProductGrids />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart2" element={<CartPage />} />
        
        <Route path="/CheckoutForm" element={<CheckoutForm />} />


     <Route path="/product" element={<ProductPage />} />
  <Route path="/checkout" element={<CheckoutForm />} />  

  <Route path="/" element={<KitchenProducts />} />
  <Route path="/product/:id" element={<ProductPages />} /> 
  <Route path="/productData" element={<productList />} />  

  <Route path="/" element={<KitchenProducts />} />
  <Route path="/cart3" element={<CartPages />} />
  <Route path="/Add to cart" element={<CartSection/>} />
  <Route path="/cart" element={<CartSection />} />


  
  <Route path="/Add to cart" element={<CartSection />} />
  <Route path="/Add to cart 2" element={<CartPagess />} />

   <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPagess />} />


  

        
      

      </Routes>
    </Router>
  );
}
export default App;