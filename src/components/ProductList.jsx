import Product from '../components/Product';
import {useEffect, useState} from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
        // Fetch products from API
        // Set products state with fetched data
    }, []);
    return (
        <div className='flex flex-wrap w-full p-5'>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}