import Product from './Product';
import {useEffect, useState} from "react";

export default function ProductList() {
    const limit = 12;
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    let skip = limit * (page - 1);



    useEffect(() => {

        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
        // Fetch products from API
        // Set products state with fetched data
    }, [page]);
    return (
        <div className='flex flex-wrap w-full p-5'>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
            <div className="flex justify-center w-full">
                <button className="p-3" onClick={() => setPage(prevPage => (prevPage - 1))} disabled={page === 1}
                > prev
                </button>
                {
                    page - 2 > 0 &&
                        <button className="p-3" onClick={() => setPage(page - 2)}> {page - 2}</button>

                }
                {
                    page - 1 > 0 &&
                        <button className="p-3" onClick={() => setPage(page - 1)}> {page - 1}</button>
                }

                <p className="p-3 text-blue-900">{page}</p>
                <button className="p-3" onClick={() => setPage(page + 1)}> {page + 1}</button>
                <button className="p-3" onClick={() => setPage(page + 2)}> {page + 2}</button>


                <button className="p-3" onClick={() => setPage(page + 1)} disabled={page === page[-1]}> next</button>
            </div>
        </div>
    )
}