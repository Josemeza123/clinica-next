import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link className="bg-white rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-100 hover:cursor-pointer" href={`/products/${product.id}`}>
      <h1 className="text-lg font-bold text-black">{product.name}</h1>
      <h2 className="text-2xl text-slate-600">{product.price}</h2>
      <p className="text-black">{product.descripcion}</p>
    </Link>
  );
}

export default ProductCard;
