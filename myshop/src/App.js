// import './App.css';
import './style.css';
import './index.css';

import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addproduct from './components/Addproduct';
import Navbar from './components/Navbar';
import Bills from './components/Bills';
import ShowProducts from './components/ShowProducts';
import ShowBills from './components/ShowBills';
import UpdateProduct from './components/UpdateProduct';
import UpdateBill from './components/UpdateBill';

function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/add" element={<Addproduct />}></Route>
          <Route path="/bill" element={<Bills />}></Route>
          <Route path="/products" element={<ShowProducts />}></Route>
          <Route path="/bills" element={<ShowBills />}></Route>
          <Route path='/update/:type' element={<UpdateProduct/>}></Route>
          <Route path='/updatebill/:type' element={<UpdateBill/>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
