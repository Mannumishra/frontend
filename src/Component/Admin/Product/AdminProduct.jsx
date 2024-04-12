import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AdminProduct = () => {
   const [data, setData] = useState([])

   const deleteProduct = async (_id) => {
      try {
         const token = localStorage.getItem('token');
         const res = await axios.delete(`http://localhost:8000/api/product/${_id}`, {
            headers: {
               Authorization: `${token}`
            }
         })
         console.log(res)
         getAPIData()
      } catch (error) {
         console.log(error);
      }
   }
   const getAPIData = async () => {
      try {
         const token = localStorage.getItem('token');
         const res = await axios.get("http://localhost:8000/api/product", {
            headers: {
               Authorization: `${token}`
            }
         })
         console.log(res.data.data);
         setData(res.data.data)
      } catch (error) {
         console.log(error);
      }
   }
   useEffect(() => {
      getAPIData()
   }, [])
   return (
      <>
         <div className="blue_bg">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Product</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-3">
                  <Sidebar />
               </div>
               <div className="col-md-9">
                  <h5 className=' text-center text-dark p-2 fs-3'>Product <Link to="/admin/product/create"><i className='fa fa-plus text-Dark float-right fs-2'></i></Link></h5>
                  <table className='table table-bordered table-responsive'>
                     <thead>
                        <tr>
                           {/* <th>Id</th> */}
                           <th>Name</th>
                           <th>Brand</th>
                           <th>Category</th>
                           <th>Color</th>
                           <th>Size</th>
                           <th>Stock</th>
                           <th>pic</th>
                           <th>pic</th>
                           <th>pic</th>
                           <th>pic</th>
                           <th colSpan={2}>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           data.map((item, index) =>
                              <tr key={index}>
                                 {/* <td>{item._id}</td> */}
                                 <td>{item.name}</td>
                                 <td>{item.brand}</td>
                                 <td>{item.maincategory}</td>
                                 <td>{item.color}</td>
                                 <td>{item.stock}</td>
                                 <td>{item.stock}</td>
                                 <td><img src={item.pic1} alt="" style={{ height: 50 }} /></td>
                                 <td><img src={item.pic2} alt="" style={{ height: 50 }} /></td>
                                 <td><img src={item.pic3} alt="" style={{ height: 50 }} /></td>
                                 <td><img src={item.pic4} alt="" style={{ height: 50 }} /></td>
                                 <td><Link to={`/editproduct/${item._id}`} className='btn btn-success'>Edit</Link></td>
                                 <td><button className='btn btn-danger' onClick={() => { deleteProduct(item._id) }}>Delete</button></td>
                              </tr>
                           )}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   )
}

export default AdminProduct