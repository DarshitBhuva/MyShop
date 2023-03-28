
import React, { useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom';

export default function ShowBills() {

    const [bills, setBills] = useState([]);

      const allBills = async () =>{
        await fetch("https://localhost:7263/api/Bills", {
            method : "GET"
        }).then(response => response.json()).then(data => setBills(data))
      }
      const deleteBill = async(id)=>{
        await fetch(`https://localhost:7263/api/Bills/${id}`, {
            method : "DELETE"
        }).then(allBills())
      }

      useEffect(()=>{
        allBills();
      }, [bills])


    return (
        <div className="container">

            <h1 className='mt-5 mb-3' Style="overflow:hidden;">All Bills</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Mobile No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total Amount</th>
                        <th scope='col'></th>
                        
                    </tr>
                </thead>
                <tbody>



                    {bills.map((bill, ind) => (
                        <tr>
                            <th scope='row'>{ind+1}</th>
                            <td >{bill.customerName}</td>
                            <td >{bill.mobileNo}</td>
                            <td>{bill.date.slice(0, 10)}</td>
                            <td>{bill.totalAmount} Rs.</td>
                            <td><NavLink to={{pathname : `/updatebill/${bill.id}`}} className='btn btn-primary mx-2'>Edit</NavLink><button onClick={()=>deleteBill(bill.id)} className='btn btn-danger'>Delete</button></td>
                         
                        </tr>
                    ))}



                </tbody>
            </table>
        </div>
    )
}
