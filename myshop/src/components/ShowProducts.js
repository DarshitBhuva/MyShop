import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom';

export default function ShowProducts() {

    const [products, setProducts] = useState([]);

    const allProducts = async () => {

        await fetch("https://localhost:7263/api/Products", {
            method: "GET"
        }).then(response => response.json()).then(data => setProducts(data))
    }

    const deleteProduct = async (id)=>{

        await fetch(`https://localhost:7263/api/Products/${id}`,{
            method : "DELETE",
            headers : {
                'Access-Control-Allow-Origin': "*",
            }
        }).then(allProducts());
    }
    useEffect(()=>{
        allProducts();
    }, [products])


    return (
        <div className="container">

            <h1 className='mt-5 mb-3' Style="overflow:hidden;">All Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price(Rs.)</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>



                    {products.map((product, ind) => (
                        <tr>
                            <th scope='row'>{ind+1}</th>
                            <td >{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><NavLink to={{pathname : `/update/${product.id}`}} className='btn btn-primary'>Edit</NavLink> <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    ))}



                </tbody>
            </table>
        </div>
    )
}
