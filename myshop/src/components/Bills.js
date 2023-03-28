import React, { useState } from 'react'

export default function Bills() {

    const [credentials, setCredentials] = useState({ customerName: "", mobileNo: "", totalAmount: "" })

    const AddBill = async(e)=>{
        e.preventDefault();

        console.log("Date" + document.getElementById("date").value);

        await fetch("https://localhost:7263/api/Bills", {
            method : "POST",

            headers: {
                'Content-Type': 'application/json',
                
                'Access-Control-Allow-Origin': "*",
            //    ' Access-Control-Allow-Credentials': true
            },
            body : JSON.stringify({customerName: credentials.customerName, mobileNo: credentials.mobileNo, date : document.getElementById("date").value, totalAmount:credentials.totalAmount})
        }).then(response => console.log(response))
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div class="row mt-5">
                <div class="mx-auto col-10 col-md-6 col-lg-6">

                    <form class="form-example" onSubmit={AddBill} method="post">
                        <h1 Style="overflow:hidden;">Add New Bill</h1>
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

                            />
                        </div>

                        <button type="submit" class="btn btn-primary btn-customized mt-4">
                            Add Bill
                        </button>
                    </form>

                </div>
            </div>
        </div>

    )
}
