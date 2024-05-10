import axios from "axios";

async function loadProducts() {
  //   const result = await conn.query("SELECT * FROM product");
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;
}

async function ProductsPage() {
  const products = await loadProducts();
  console.log(products);
  return (
    <div className="grid gap-4 grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg border-gray-800 mb-3 p-4"
        >
          <h1 className="text-lg font-bold text-black">{product.name}</h1>
          <h2 className="text-2xl text-slate-600">{product.price}</h2>
          <p className="text-black">{product.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
