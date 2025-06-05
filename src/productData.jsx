// src/productData.js
import images112 from './Images/k1.webp';
import images113 from './Images/k2.webp';
import images114 from './Images/k3.webp';
import images115 from './Images/k4.webp';

const productList = [
  {
    id: 1,
    title: 'Thenga Coconut Shell Spoons Sets for Cooking',
    price: 649,
    oldPrice: 699,
    discount: 7,
    rating: 5,
    reviews: 17,
    image: images112,
    thumbnails: [images112],
    description: 'Handcrafted coconut spoons perfect for daily use.',
    contents: ['1 spatula', '1 large spoon', '3 wooden spoons']
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
    thumbnails: [images113],
    description: 'Ideal for spices, tea, and coffee.',
    contents: ['6 masala spoons']
  },
  {
    id: 3,
    title: 'Thenga Frying & Non Stick Wooden Ladles Set',
    price: 399,
    oldPrice: 499,
    discount: 20,
    rating: 3,
    reviews: 5,
    image: images114,
    thumbnails: [images114],
    description: 'Non-stick cookware safe, eco-friendly ladles.',
    contents: ['2 frying spoons', '1 ladle']
  },
  {
    id: 4,
    title: 'Thenga Wooden Coconut Shell Serving Spoons',
    price: 369,
    oldPrice: 399,
    discount: 7,
    rating: 5,
    reviews: 5,
    image: images115,
    thumbnails: [images115],
    description: 'Elegant coconut shell serving spoons.',
    contents: ['2 serving spoons']
  }
];

export default productList;
