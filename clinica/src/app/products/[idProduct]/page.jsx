import axios from "axios";
import React from "react";
import Buttons from "./Buttons";

async function loadProduct(id) {
  const { data } = await axios.get("http://localhost:3000/api/products/" + id);
  return data;
}

async function ProductPage({ params }) {
  console.log(params);
  const product = await loadProduct(params.idProduct);
  return (
    <section className="flex justify-center items-center">
      <div className="p-6 bg-white">
        <p className="text-black">Name: {product.name}</p>
        <p className="text-black">Price: {product.price}</p>
        <p className="text-black">Descripcion: {product.descripcion}</p>
        <Buttons productid={product.id} />
      </div>
    </section>
  );
}

export default ProductPage;
