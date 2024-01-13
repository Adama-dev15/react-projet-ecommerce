import React from "react";
import ProdutsData from "../../mocks/ApiMock";
import Product from "../Produit/Product";

const Products = () => {
  return (
    <div className="products_section">
      <h1>la liste de tous les products</h1>
      {ProdutsData.map((product, index) => (
        <Product key={product.id + index} {...product} />
      ))}
    </div>
  );
};

export default Products;
