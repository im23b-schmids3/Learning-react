export default function Product(props) {
    const product = props.product;
    return (
        <div className='w-1/4 p-5 border-2 border-gray-300'>
            <img src={product.thumbnail} alt={product.name}/>
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-gray-500">{product.price}</p>
        </div>
    )
}