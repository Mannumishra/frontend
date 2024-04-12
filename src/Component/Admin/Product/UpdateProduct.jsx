import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const UpdateProduct = () => {
    const { _id } = useParams()
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        brand: "",
        maincategory: "",
        color: "",
        size: "",
        stock: "",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })

    const getAPIData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/product/" + _id)
            // console.log(res.data);
            setData({
                name:res.data.data.name
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAPIData()
    }, [])

    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getInputFile = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }

    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("maincategory", data.maincategory);
    formData.append("color", data.color);
    formData.append("size", data.size);
    formData.append("stock", data.stock);
    formData.append("pic1", data.pic1);
    formData.append("pic2", data.pic2);
    formData.append("pic3", data.pic3);
    formData.append("pic4", data.pic4);

    const postData = async (e) => {
        e.preventDefault()
        console.log(formData)
        try {
            const token = localStorage.getItem('token');
            const res = await axios.put('http://localhost:8000/api/product/' + _id, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res);
            // if (res.status === 200)
            //     navigate("/admin/product")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="blue_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Update Product</h2>
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
                    <div className="col-md-9 ">
                        <h2 className='text-center'>Update Product</h2>
                        <form action="" >
                            <div className="row">
                                <div className='col'>
                                    <label htmlFor="">Product Name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name='name' value={data.name} onChange={getInputData} required placeholder="Product Name" />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Product Brand <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name='brand' value={data.brand} onChange={getInputData} required placeholder="Product Brand name" />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Product Category <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name='maincategory' value={data.maincategory} onChange={getInputData} required placeholder="Product Category name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <label htmlFor="">Product Color <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name='color' value={data.color} onChange={getInputData} required placeholder="Product color Name " />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Product Size <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" name='size' value={data.size} onChange={getInputData} required placeholder="Product Size " />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Product Stock <span className='text-danger'>*</span></label>
                                    <input type="Number" className="form-control" name='stock' value={data.stock} onChange={getInputData} required placeholder="Product Stock" />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <label htmlFor="">Product Pic <span className='text-danger'>*</span></label>
                                    <input type="file" className="form-control" name='image1' onChange={getInputFile} required placeholder="Product Pic" />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Product Pic <span className='text-danger'>*</span></label>
                                    <input type="file" className="form-control" name='image2' onChange={getInputFile} required placeholder="Product Pic" />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'>
                                    <label htmlFor="">Product pic <span className='text-danger'>*</span></label>
                                    <input type="file" className="form-control" name='image3' onChange={getInputFile} required placeholder="Product pic" />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Product pic <span className='text-danger'>*</span></label>
                                    <input type="file" className="form-control" name='image4' onChange={getInputFile} required placeholder="Product pic" />
                                </div>
                            </div>
                            <div>
                                <button className='btn  mt-2 mb-3 text-light text-center w-100' onClick={postData} style={{ backgroundColor: "#183661" }}>Update Product</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct