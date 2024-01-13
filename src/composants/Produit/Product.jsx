import React from "react";

const Product = ({ id, name, price, category, brand, stock }) => {
  return (
    <div>
      <a href={`/product/${id}`} className="product">
        <h2>{name}</h2>
        <div className="producr-descri">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            et sequi a, dolores sint velit!
          </p>
          <small>{price}</small>
        </div>
      </a>
    </div>
  );
};

Product.defaltProps = {
  author: "default author",
};

export default Product;
