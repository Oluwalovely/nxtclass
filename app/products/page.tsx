import React from "react";
import { ComplexProducts } from "../types";

const Products = async () => {
    const data = await fetch("https://dummyjson.com/products");

    const products = await data.json();

    const convProducts: ComplexProducts[] = products.products;
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">PRODUCTS</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
                {convProducts.map((prod, idx) => (
                    <div key={idx} className="card lg:card-side bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow rounded-lg">
                        <figure className="px-3 pt-3">
                            <img
                                src={prod.thumbnail}
                                alt={prod.title}
                                className="h-32 w-full object-contain "
                            />
                        </figure>
                        <div className="card-body p-3 gap-1">
                            <h2 className="text-sm font-semibold line-clamp-1">{prod.title}</h2>
                            <p className="text-xs text-gray-400 line-clamp-2">{prod.description}</p>
                            <p className="text-sm font-bold text-primary mt-1">${prod.price}</p>
                            <p className="text-xs text-gray-400">⭐ {prod.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;