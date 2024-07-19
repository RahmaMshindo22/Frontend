import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { image: '../image/crab.jpg', title: "Crab", price: "$10.00" },
  { image: '../image/garfish (2).jpg', title: "Garfish", price: "Tzs 12,000" },
  { image: '../image/eel.jpg', title: "Eel", price: "Tzs 11,000" },
  { image: '../image/octopus.jpg', title: "Octopus", price: "Tzs 12,000" },
  { image: '../image/lobster.jpg', title: "Lobster", price: "Tzs 20,000" },
  { image: '../image/ngisi.jpg', title: "Ngisi", price: "Tzs 12,000" },
  { image: '../image/red-snapper.jpg', title: "Red-snapper", price: "Tzs 9,000" },
  { image: '../image/scadfish.jpg', title: "Scadfish", price: "Tzs 10,000" },
  { image: '../image/salmon.jpg', title: "Salmon", price: "Tzs 10,000" },
  { image: '../image/shrimp.jpg', title: "Shrimp", price: "Tzs 30,000" },
  { image: '../image/shark.jpg', title: "Shark", price: "Tzs 12,000" },
  { image: '../image/skate-fish.jpg', title: "Skate-fish", price: "Tzs 9,000" },
  { image: '../image/tuna-fish.jpg', title: "Tuna-fish", price: "Tzs 11,000" }
];

const ProductList = () => {
  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
