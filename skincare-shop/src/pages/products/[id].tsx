import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      // Replace with your actual data fetching logic
      fetch(`/api/products`)
        .then((res) => res.json())
        .then((data) => setProduct(data.find((p: any) => p.id === Number(id))));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <Link
          href="/products"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to products
        </Link>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-64 h-64 object-cover rounded-lg border"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="text-xl font-semibold text-green-600 mb-6">
              ${product.price.toFixed(2)}
            </div>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => {
                addItem(product);
                alert("added!");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
