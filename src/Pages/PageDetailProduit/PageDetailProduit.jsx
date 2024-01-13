import React from "react";
import { useParams } from "react-router-dom";
import ProdutsData from "../../mocks/ApiMock";

const PageDetailProduit = () => {
  const { productId } = useParams();
  const productIdAsNumber = parseInt(productId, 10); // Convertir en nombre
  const product = ProdutsData.find((product) => product.id == productIdAsNumber);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div>{product.price}</div>
    </div>
  );
};

export default PageDetailProduit;
