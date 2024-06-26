import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddReviews = () => {
    const [data,getData] = useState({
        "name":"",
        "year":"",
        "duration":"",             
        "rating":""
    })
    const inputHandler = (event)=>{
        {
            getData({...data,[event.target.name]:event.target.value})           //to get data from input this is 
        }
    }
    const readValue = ()=>{
        // console.log(data)
        axios.post("http://localhost:8080/add",data).then((response)=>{
            if (response.data.status==="success") {
                alert("Review Added")
            } else {
                alert("An error occured")
            }

        }).catch((error)=>{
            alert(error.message)
        })
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label" >Film Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Year</label>
                        <input type="text" className="form-control" name='year' value={data.year} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Duration</label>
                        <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Rating</label>
                        <input type="text" className="form-control" name='rating' value={data.rating} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue} >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddReviews