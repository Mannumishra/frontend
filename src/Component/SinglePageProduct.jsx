import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const SinglePageProduct = () => {
  const { _id } = useParams()
  console.log(_id);
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(0)

  const getAPIData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/product/" + _id)
      console.log(res);
      setProduct(res.data.data)
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
                <h2>Product Details</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 mt-2">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={`${product.pic2}`} height="250px" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`${product.pic2}`} height="250px" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`${product.pic3}`} height="250px" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`${product.pic4}`} height="250px" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* <div className='mt-1 d-flex gap-1'>
                <img src={`${product.pic1}`} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" alt="" />
                <img src={`${product.pic2}`} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" alt="" />
                <img src={`${product.pic3}`} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" alt="" />
                <img src={`${product.pic4}`} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" alt="" />
              </div> */}
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bold mb-2">{product.name}</h1>
              <h2 className="mb-2">Category : {product.maincategory}</h2>
              <div className="d-flex mb-2">
                <i className="fa fa-star text-Warning" style={{color:"#F3C83A"}}></i>
                <i className="fa fa-star text-Warning" style={{color:"#F3C83A"}}></i>
                <i className="fa fa-star text-Warning" style={{color:"#F3C83A"}}></i>
                <i className="fa fa-star text-Warning" style={{color:"#F3C83A"}}></i>
                <i className="fa fa-star"></i>
              </div>
              <h2>Color : {product.color}</h2>
              <h2>Size : {product.size}</h2>
              <h2>Stock : {product.stock}</h2>
              {
                product.stock > 1 ?
                  <>
                    <div className="input-group quantity mb-2" style={{ width: "300px" }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => qty > 1 ? setQty(qty - 1) : ""} >
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <h3 className='mx-3'>{qty}</h3>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => setQty(qty + 1)}>
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <button className="btn border border-primary rounded-pill px-4 py-2 mb-4 text-primary" ><i className="fa fa-shopping-bag me-2 text-primary"></i>Place Order</button>&nbsp;
                  </> : ""
              }

              {/* <p className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </p> */}
            </div>
          </div>
          {/* <h3 className="fw-bold mt-3 text-center">Related product</h3> */}
          {/* <Productlider data={relatedProduct} /> */}
        </div>
      </div>
    </>
  )
}

export default SinglePageProduct