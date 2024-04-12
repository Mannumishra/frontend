import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   const UserString = sessionStorage.getItem('user');
   const token = localStorage.getItem('token');
   const [admin, setAdmin] = useState(false);
   const User = JSON.parse(UserString);

   // Check if User object exists and has a Role property
   useEffect(() => {
      if (User && User.role === "Admin") {
         setAdmin(true);
      } else {
         setAdmin(false);
      }
   }, [User])

   const handleLogout = () => {
      sessionStorage.clear()
      localStorage.clear()
      window.location.href = "/"
   }
   return (
      <>
         <header>
            {/* <!-- header inner --> */}
            <div className="header">
               <div className="header_midil">
                  <div className="container">
                     <div className="row d_flex">
                        <div >
                           <Link className="logo" to="#"><img src="/image/logo registered.jpg" alt="#" style={{ height: 30 }} /></Link>
                        </div>
                        {/* <div className="col-md-4">
                           <ul className="right_icon d_none1">
                              <li><Link to="#"><img src="images/shopping.png" alt="#"/></Link> </li>
                           </ul>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div className="header_bottom">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                           <nav className="navigation navbar navbar-expand-md navbar-dark ">
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                 <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarsExample04">
                                 <ul className="navbar-nav mr-auto">
                                    {admin ? (
                                       <>
                                          <li className="nav-item">
                                             <Link className="nav-link" to="/adminhome">Admin</Link>
                                          </li>
                                       </>
                                    ) : <>
                                       <li className="nav-item active">
                                          <Link className="nav-link" to="/">Home</Link>
                                       </li>
                                       <li className="nav-item">
                                          <Link className="nav-link" to="/about">About</Link>
                                       </li>
                                       <li className="nav-item">
                                          <Link className="nav-link" to="/product">Products</Link>
                                       </li>
                                       <li className="nav-item">
                                          <Link className="nav-link" to="/contact">Contact Us</Link>
                                       </li>
                                    </>}
                                 </ul>
                              </div>
                           </nav>
                        </div>
                        <div className="col-md-4">
                           {token ? (
                              <div className="search">
                                 <Link onClick={handleLogout}><button className='btn'>Logout</button></Link> &nbsp;
                              </div>
                           ) : (
                              <div className="search">
                                 <Link to="/login">   <button className='btn'>Log In</button></Link> &nbsp;
                                 <Link to="/signup">  <button className='btn'>Sign Up</button></Link>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}

export default Header