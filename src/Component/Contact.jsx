import React, { useState } from 'react'

const Contact = () => {
   const [data, setData] = useState({
      name: "",
      email: "",
      address: "",
      phone: "",
      message: ""
   })

   const getinputData = (e) => {
      const { name, value } = e.target
      setData({ ...data, [name]: value })
   }
   // console.log(data);
   const postData = async (e) => {
      e.preventDefault()
      let response = await fetch("http://localhost:8000/api/contact", {
         method: "post",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      })
      response = await response.json()
      console.log(response);
   }
   return (
      <>
         {/* <!-- banner --> */}
         <div className="blue_bg">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Contact Us</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- contact section --> */}
         <div id="contact" className="contact">
            <div className="con_bg">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <form onSubmit={postData} className="main_form">
                           <div className="row">
                              <div className="col-md-6 col-sm-6">
                                 <input className="contactus" placeholder="Name" type="text" onChange={getinputData} name="name" required />
                              </div>
                              <div className="col-md-6 col-sm-6">
                                 <input className="contactus" placeholder="Phone Number" type="text" onChange={getinputData} name="phone" required />
                              </div>
                              <div className="col-md-6 col-sm-6">
                                 <input className="contactus" placeholder="Email" type="text" onChange={getinputData} name="email" required />
                              </div>
                              <div className="col-md-6 col-sm-6">
                                 <input className="contactus" placeholder="Address" type="text" onChange={getinputData} name="address" required />
                              </div>
                              <div className="col-md-12">
                                 <input className="contactusmess" placeholder="Message" type="text" onChange={getinputData} name="message" required />
                              </div>
                              <div className="col-md-12">
                                 <button className="send_btn mb-5">Send</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end contact section --> */}
      </>
   )
}

export default Contact