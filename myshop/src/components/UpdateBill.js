import React from 'react'
import { useState , useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default function UpdateBill() {
    const [credentials, setCredentials] = useState({ customerName: "", mobileNo: "",date:"", totalAmount: "" })

    const params = useParams();
    const navigate = useNavigate();
    const getBill = async(id)=>{
        

        await fetch(`https://localhost:7263/api/Bills/${id}`, {
            method : "GET",

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

    const updateBill = async (e) => {
        e.preventDefault();
        await fetch(`https://localhost:7263/api/Bills/${params.type}`, {

            method: "PUT",
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',

                'Access-Control-Allow-Origin': "*",
                //    ' Access-Control-Allow-Credentials': true
            },

            body: JSON.stringify({id:params.type, customerName: credentials.customerName, mobileNo: credentials.mobileNo, date : document.getElementById("date").value, totalAmount:credentials.totalAmount})
        }).then(response => {
            if(response.ok === true && response.status === 204)
            {
                navigate("/bills");
            }
        })
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        getBill(params.type);
    }, [])
  return (
    <div>
            <div class="row mt-5">
                <div class="mx-auto col-10 col-md-6 col-lg-6">

                    <form class="form-example" onSubmit={updateBill}>
                        <h1 Style="overflow:hidden;">Update Bill</h1>
                        {/* <p class="description">
                            A tutorial on how to align a "form" in Bootstrap 4 and 5.
                        </p> */}

                        <div class="col-12 d-flex form-group mt-5">
                            <label for="username" className='col-md-3' >Customer Name:  </label>
                            <input
                                type="text"
                                className='col-md-6 form-control mx-3'
                                id="username"
                                placeholder="Customer Name..."
                                name="customerName"
                                onChange={onChange}
                                value = {credentials.customerName}

                            />
                        </div>
                        <div class="d-flex form-group">
                            <label for="password" className='col-md-3'>Mobile No:</label>
                            <input
                                type="number"
                                class="col-md-6 form-control mx-3"

                                placeholder="Mobile No..."
                                name="mobileNo"
                                onChange={onChange}
                                value={credentials.mobileNo}
                            />
                        </div>
                        <div class="d-flex form-group">
                            <label for="password" className='col-md-3'>Date:</label>
                            <input
                                type="date"
                                class="col-md-6 form-control mx-3"

                                placeholder="Date..."
                                name="date"
                                id="date"
                              
                            />
                        </div>
                        <div class="d-flex form-group">
                            <label for="password" className='col-md-3'>Amount:</label>
                            <input
                                type="number"
                                class="col-md-6 form-control mx-3"

                                placeholder="Amount..."
                                name="totalAmount"
                                onChange={onChange}
                                value={credentials.totalAmount}

                            />
                        </div>

                        <button type="submit" class="btn btn-primary btn-customized mt-4">
                            Update Bill
                        </button>
                    </form>

                </div>
            </div>
        </div>
  )
}
