import React from 'react';

const Product = ({ name, price, imgURL }) => {
  return (
    <div>
      <img src={imgURL} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

export default Product;
