import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const AdminHome = () => {
  return (
   <>
     <div className="blue_bg">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Admin Home</h2>
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
        </div>
      </div>
   </>
  )
}

export default AdminHome