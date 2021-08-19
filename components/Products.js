import React from 'react'
import LoadingSpinner from './LoadingSpinner'

export const Products = ({products, loading}) => {
    if(loading){
        return <LoadingSpinner />
    }
    return (<>
    <div className="grid gap-8 md:grid-rows-3 md:grid-cols-2 mt-10 lg:grid-rows-2 lg:grid-cols-3">
        {
            products.map(product => (
                
                <div key={product.id} >
                <div className="relative group bg-local bg-center bg-cover object-cover h-80 w-72" style={{ backgroundImage: `url(${product.image.src})` }} >
                {product.bestseller ? <span className="bg-white text-black w-20 h-5 absolute top-0 left-0 text-sm text-center">Best Seller</span> : ""}
                {product.featured ? <span className="bg-pink-500 text-white w-20 h-5 absolute top-0 right-0 text-sm text-center">Featured</span> : ""}
                <button onClick={()=> setShowCart(true)} className="block md:hidden group-hover:block bg-black text-white w-full h-10 absolute bottom-0 left-0 text-normal text-center"><span className="place-content-center uppercase">Add to Cart</span></button>
                </div>
                <div>
                <span className="text-left text-gray-600 text-sm">{product.category}</span><br />
                <span className="text-left text-black text-2xl font-semibold">{product.name}</span><br />
                <span className="text-left text-gray-500 text-xm">${product.price}</span>
                </div>
                </div>
            ))
        }
    </div>

    
    </>)
}
