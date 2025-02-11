import React from 'react'

const Home = () => {
   return (
      <>
         {/* <!-- banner --> */}
         <section className="banner_main">
            <div className="container">
               <div className="row">
                  <div className="col-md-8">
                     <div className="text-bg">
                        <h1> <span className="blodark"> PavLITE </span> <br />Trands 2024</h1>
                        <p>A huge Footerwear collection for ever </p>
                        <a className="read_more" href="#">Shop now</a>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="ban_img">
                        <figure><img src="images/ban_img.png" alt="#" /></figure>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img src="image/1.jpg" className="d-block w-100" alt="Slide 1" />
               </div>
               <div className="carousel-item">
                  <img src="image/2.jpg" className="d-block w-100" alt="Slide 2" />
               </div>
               <div className="carousel-item">
                  <img src="image/3.jpg" className="d-block w-100" alt="Slide 3" />
               </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
         <div id="project" className="project">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Featured Products</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="product_main">

                     <div className="project_box ">
                        <div className="dark_white_bg" ><img src="images/shoes1.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>


                     <div className="project_box ">
                        <div className="dark_white_bg" ><img src="images/shoes2.png" alt="#" /></div>
                        <h3 >Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/shoes3.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/shoes4.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/shoes5.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>


                     <div className="project_box ">
                        <div className="dark_white_bg" ><img src="images/tisat1.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box ">
                        <div className="dark_white_bg" ><img src="images/tisat2.png" alt="#" /></div>
                        <h3 >Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/tisat3.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/tisat4.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/tisat5.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>


                     <div className="project_box ">
                        <div className="dark_white_bg" ><img src="images/mix1.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box ">
                        <div className="dark_white_bg" ><img src="images/mix2.png" alt="#" /></div>
                        <h3 >Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/mix3.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/mix4.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="project_box">
                        <div className="dark_white_bg" ><img src="images/mix5.png" alt="#" /></div>
                        <h3>Short Openwork Cardigan $120.00</h3>
                     </div>

                     <div className="col-md-12">
                        <a className="read_more" href="#">See More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end project section --> */}
         {/* <!-- fashion section --> */}
         <div className="fashion">
            <img src="images/fashion.jpg" alt="#" />
         </div>
         {/* <!-- end fashion section --> */}
         {/* <!-- news section --> */}
         <div className="news">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Letest News</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 margin_top40">
                     <div className="row d_flex">
                        <div className="col-md-5">
                           <div className="news_img">
                              <figure><img src="images/news_img1.jpg" /></figure>
                           </div>
                        </div>
                        <div className="col-md-7">
                           <div className="news_text">
                              <h3>Specimen book. It has survived not only five</h3>
                              <span>7 July 2019</span>
                              <div className="date_like">
                                 <span>Like </span><span className="pad_le">Comment</span>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 margin_top40">
                     <div className="row d_flex">
                        <div className="col-md-5">
                           <div className="news_img">
                              <figure><img src="images/news_img2.jpg" /></figure>
                           </div>
                        </div>
                        <div className="col-md-7">
                           <div className="news_text">
                              <h3>Specimen book. It has survived not only five</h3>
                              <span>7 July 2019</span>
                              <div className="date_like">
                                 <span>Like </span><span className="pad_le">Comment</span>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 margin_top40">
                     <div className="row d_flex">
                        <div className="col-md-5">
                           <div className="news_img">
                              <figure><img src="images/news_img3.jpg" /></figure>
                           </div>
                        </div>
                        <div className="col-md-7">
                           <div className="news_text">
                              <h3>Specimen book. It has survived not only five</h3>
                              <span>7 July 2019</span>
                              <div className="date_like">
                                 <span>Like </span><span className="pad_le">Comment</span>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end news section --> */}
         {/* <!-- newslatter section --> */}
         <div className="newslatter">
            <div className="container">
               <div className="row d_flex">
                  <div className="col-md-5">
                     <h3 className="neslatter">Subscribe To The Newsletter</h3>
                  </div>
                  <div className="col-md-7">
                     <form className="news_form">
                        <input className="letter_form" placeholder=" Enter your email" type="text" name="Enter your email" />
                        <button className="sumbit">Subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end newslatter section --> */}
         {/* <!-- three_box section --> */}
         <div className="three_box">
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <div className="gift_box">
                        <i><img src="images/icon_mony.png" /></i>
                        <span>Money Back</span>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="gift_box">
                        <i><img src="images/icon_gift.png" /></i>
                        <span>Special Gift</span>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="gift_box">
                        <i><img src="images/icon_car.png" /></i>
                        <span>Free Shipping</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- end three_box section --> */}
      </>
   )
}

export default Home