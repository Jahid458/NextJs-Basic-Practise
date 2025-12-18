import React from "react";

const Products = async ({ searchParams }) => {
  const Params = await searchParams;
  // console.log(searchParams);

  const category = Params?.category || "all";
  const sort = Params?.sort || "default";
  const page = Params?.page || 1;
  return (
    <div>
      Showing {category} products,sorted by {sort}, page {page}
    </div>
  );
};

export default Products;

//http://localhost:3000/products?category=laptop&page=8&sort=price_asc
