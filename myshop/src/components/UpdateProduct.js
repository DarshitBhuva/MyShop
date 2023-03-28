import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function UpdateProduct() {
    const [credentials, setCredentials] = useState({ name: "", category: "", price: "", quantity: "" })



    const params = useParams();
    const navigate = useNavigate();

    
    const findProduct = async (id) => {


        // console.log(credentials.name + " " + credentials.category + " " + credentials.price + " " + credentials.quantity);
        await fetch(`https://localhost:7263/api/Products/${id}`, {

            method: "GET",
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',

                'Access-Control-Allow-Origin': "*",
                //    ' Access-Control-Allow-Credentials': true
            },
        }).then(response => response.json())
            .then(data => {
                // setProduct(data);
                setCredentials(data);
                // console.log(credentials.name)
            })



    }

    const updateProduct = async (e) => {
        e.preventDefault();
        await fetch(`https://localhost:7263/api/Products/${params.type}`, {

            method: "PUT",
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',

                'Access-Control-Allow-Origin': "*",
                //    ' Access-Control-Allow-Credentials': true
            },

            body: JSON.stringify({ id: params.type, name: credentials.name, category: credentials.category, price: credentials.price, quantity: credentials.quantity }),
        }).then(response => {
            if(response.ok === true && response.status === 204)
            {
                navigate("/products");
            }
        })
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        findProduct(params.type);
    }, [])

    return (
        <div>
            <div class="row mt-5">
                <div class="mx-auto col-10 col-md-6 col-lg-6">

                    <form class="form-example" onSubmit={updateProduct} method="post">
                        <h1 Style="overflow:hidden;">Upadate Product</h1>
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
                                value={credentials.name}
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
                                value={credentials.category}
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
                                value={credentials.price}
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
                                value={credentials.quantity}
                            />
                        </div>

                        <button type="submit" class="btn btn-primary btn-customized mt-4">
                            Update Product
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
