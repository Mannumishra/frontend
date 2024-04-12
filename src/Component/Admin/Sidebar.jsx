import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   <div style={{marginTop:"50px" ,marginBottom:"50px"}}>
     <ul className="list-group">
    <Link to='/admin/product'><li className="list-group-item">Product <span className='fa fa-list float-right'></span></li></Link>
  </ul>
   </div>
  )
}

export default Sidebar