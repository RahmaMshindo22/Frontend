import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
      <a href="orders.html" className="button">Order</a>
    </div>
  );
};

export default ProductCard;