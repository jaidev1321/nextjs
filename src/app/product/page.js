"use client";
import { useEffect, useState } from "react";
export default function Product() {
  const [productList, setProductList] = useState([]);
  const [productListStatus , setProductListStatus] = useState("Fetching Products..");

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setProductList(data.products);
    setProductListStatus("")
  }

  return (
    <>
      <h1>Product List ds</h1>
      {
        productListStatus
      }
      {
        productList.map((item) => (
            <h3 key={item.id}>Name : {item.title}</h3>
        ))
      }
    </>
  );
}
