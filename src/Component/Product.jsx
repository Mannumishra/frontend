import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {
   const [data, setData] = useState([])

   const getAPIData = async () => {
      try {
         let res = await axios.get("http://localhost:8000/api/product")
         console.log(res);
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
                        <h2>Featured Products</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- project section --> */}
         <div style={{ display: "flex", gap: "40px", margin: "40px", borderRadius: "20px" }}>
            {
               data.map((item, index) =>
                  <div key={index}>
                     <div> <img src={item.pic1} alt="" style={{ borderRadius: "20px" }} /></div>
                     <div style={{ "color": "black", "fs": "100px" }}>{item.name}</div>
                     <div><h4>Ctegory  : {item.maincategory}</h4></div>
                     {/* <div>
                        <i className='fa fa-star' style={{color:"orange"}}></i>
                        <i className='fa fa-star' style={{color:"orange"}}></i>
                        <i className='fa fa-star' style={{color:"orange"}}></i>
                        <i className='fa fa-star'style={{color:"orange"}}></i>
                        <i className='fa fa-star'></i>
                       
                     </div> */}
                     <div><Link className='btn' to={`/singleproduct/${item._id}`} style={{ backgroundColor: "orange", color: "white" }}>View Product</Link></div>
                  </div>
               )}
         </div>
      </>
   )
}

export default Product