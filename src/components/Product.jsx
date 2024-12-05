export default function Product(props) {
    const product = props.product;
    return (
        <div className='w-1/4 p-5 border border-gray-300'>
            <img src={product.thumbnail} alt={product.name}/>
            <h2 className="font-bold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-black">{product.price}</p>
        </div>
    )
}