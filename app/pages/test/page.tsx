// app/pages/basics/page.tsx
'use client'
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}
export default function Test()  {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('api/products');
      const data: Product[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  console.log(' =Test=>', products);
  
  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};



