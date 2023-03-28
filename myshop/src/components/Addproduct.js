
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Addproduct() {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", category: "", price: "", quantity: "" })
    const addProduct = async (e) => {
        e.preventDefault();

        // console.log(credentials.name + " " + credentials.category + " " + credentials.price + " " + credentials.quantity);
        await fetch('https://localhost:7263/api/Products', {

            method: "POST",
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                
                'Access-Control-Allow-Origin': "*",
            //    ' Access-Control-Allow-Credentials': true
            },

            body: JSON.stringify({ name: credentials.name, category: credentials.category, price: credentials.price, quantity: credentials.quantity }),
        }).then(response => {
            if(response.ok === true && response.status === 201)
            {
                navigate("/products");
            }
            console.log(response);
        })

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div class="row mt-5">
                <div class="mx-auto col-10 col-md-6 col-lg-6">

                    <form class="form-example" onSubmit={addProduct} method="post">
                        <h1 Style="overflow:hidden;">Add New Product</h1>
                        {/* <p class="description">
                            A tutorial on how to align a "form" in Bootstrap 4 and 5.
                        </p> */}

                        <div class="col-12 d-flex form-group mt-5">
                            <label for="username" className='col-md-3' >Product Name:  </label>
                            <input
                                type="text"
                                className='col-md-6 form-control mx-3'
                                id="username"
                                placeholder="Product Name..."
                                name="name"
                                onChange={onChange}
                            />
                        </div>
                        <div class="d-flex form-group">
                            <label for="password" className='col-md-3'>Category:</label>
                            <input
                                type="text"
                                class="col-md-6 form-control mx-3"

                                placeholder="Category..."
                                name="category"
                                onChange={onChange}
                            />
                        </div>
                        <div class="d-flex form-group">
                            <label for="password" className='col-md-3'>Price:</label>
                            <input
                                type="number"
                                class="col-md-6 form-control mx-3"

                                placeholder="Price..."
                                name="price"
                                onChange={onChange}
                            />
                        </div>
                        <div class="d-flex form-group">
                            <label for="password" className='col-md-3'>Quantity:</label>
                            <input
                                type="text"
                                class="col-md-6 form-control mx-3"

                                placeholder="Quantity..."
                                name="quantity"
                                onChange={onChange}
                            />
                        </div>

                        <button type="submit" class="btn btn-primary btn-customized mt-4">
                            Add Product
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
