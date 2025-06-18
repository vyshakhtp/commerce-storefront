import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard.jsx";

const HomePage = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch("https://sheetdb.io/api/v1/hdfdlhz6ni89m")
            .then(response => response.json())
            .then((data) => setProducts(data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    console.log(products);

    return (
        <div className="relative min-h-screen overflow-hidden bg-blue-300">

       
            <h1 className="font-bold text-3xl p-6">
                Products
            </h1>
            <div className="flex flex-wrap mx-0">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-full md:w-1/3 lg:w-1/4 p-2"
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
        
    )

};

export default HomePage;