import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb } from '../fakedb';

const Product = () => {
    const products=useLoaderData()
    // const {id, title, price, description,images}=products.products
    function handleCart(id){
        addToDb(id)
    }
    // console.log(products.products);
    return (
        <div className='grid grid-cols-3 mx-8  gap-6 '>
            {
                products.products.map(product=>{
                    // console.log(product);
                    return <div className='border border-black rounded-2xl p-6 text-center flex flex-col' key={product.id}>
                        <img src={product.images[0]} alt="" />
                        <p>Name:{product.title}</p>
                        <p>Price:{product.price}</p>
                        <button onClick={()=>handleCart(product.id)} className='bg-red-300 p-2 w-full rounded-lg mt-auto '>Add to cart</button>

                    </div>
                }
                     
                
                   )
            }
            
        </div>
    );
};

export default Product;