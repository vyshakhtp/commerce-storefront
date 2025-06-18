import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Replace with your actual SheetDB URL
  const SHEETDB_URL = `https://sheetdb.io/api/v1/hdfdlhz6ni89m/search?id=${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(SHEETDB_URL);
        const data = await response.json();
        if (data.length > 0) {
          setProduct(data[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full max-h-96 object-contain mb-4"
      />
      <p className="text-lg mb-2 font-semibold text-gray-800">Price: ₹{product.price}</p>
      <p className="text-gray-600">{product.description || "No description available."}</p>
    </div>
  );
};

export default ProductDetails;
