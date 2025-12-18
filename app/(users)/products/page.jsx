import React from "react";
import ProductList from "./ProductList";

const Products = async ({ searchParams }) => {
  const Params = await searchParams;
  console.log("Outer: ",Params); 

  const category = Params?.category || "all";
  const sort = Params?.sort || "default";
  const page = Params?.page || 1;
  return (
    <div>
        <ProductList />
      Showing {category} products,sorted by {sort}, page {page}
    </div>
  );
};

export default Products;

//  http://localhost:3000/products?category=laptop&page=8&sort=price_asc
