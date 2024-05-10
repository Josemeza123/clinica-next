"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    descripcion: "",
  });
  const form = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/products", product);
    console.log(res);
    form.current.reset();
    router.push("/products");
  };
  return (
    <div>
      <form
        action=""
        className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
          className="shadow text-black appearance-none border rounded w-full py-2 px-3"
          autoFocus
        />

        <label
          htmlFor="price"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Price
        </label>
        <input
          name="price"
          type="text"
          placeholder="00.00"
          onChange={handleChange}
          className="shadow text-black appearance-none border rounded w-full py-2 px-3"
        />

        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Description
        </label>
        <textarea
          name="descripcion"
          rows={3}
          placeholder="description"
          onChange={handleChange}
          className="shadow text-black appearance-none border rounded w-full py-2 px-3"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
