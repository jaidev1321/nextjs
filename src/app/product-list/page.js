import Button from "./button";

async function fetchProduct(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}
export default async function productList(){
    let list = await fetchProduct();
    console.log(list);
    return <>
    <h1>Product List SSR</h1>
    {
        list.map((item) => (
            <>
            <h3>Name : {item.title}</h3>
            <Button price={item.price} />
            </>
        ))
    }
    </>
}