import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const DeleteReview = () => {

        
        const [data,getData] = useState(
            {
                "name":"",
            }
        )
    
        
        const inputHandler = (event)=>{
            getData({...data,[event.target.name]:event.target.value})
        }
    
        const readValue = ()=>{
            axios.post("http://localhost:8080/search",data).then(
                (response)=>{
                    changeResult(response.data)
                }
            ).catch(
                (error)=>{
                    alert(error.message)
                }
            )
        }
        
        const [result,changeResult] = useState([])
    
        const deleteReview = (id)=>{
            let input = {"_id": id}
            axios.post("http://localhost:8080/delete",input).then(
                (response)=>{
                    if (response.data.status === "success") {
                        alert("Successfully Deleted")
                    } else {
                        alert("Something went wrong")
                    }
                }
            ).catch()
        }

  return (
    <div>
        <NavBar/>
        <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                                <input type="text" className="form-control" placeholder='Enter Movie Name...'
                                    name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                                <button className="btn btn-danger" onClick={readValue}>Delete</button>
                            </div>
                        </div>
                        <div className="row g-3">
                            {result.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">



                                    <div class="card">
              <img src="https://them0vieblog.com/wp-content/uploads/2018/09/inception.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Film Review</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{value.name}</li>
                <li class="list-group-item">{value.year}</li>
                <li class="list-group-item">{value.duration}</li>
                <li class="list-group-item">{value.rating}</li>
                <button className="btn btn-danger" onClick={()=>{deleteReview(value._id)}}>Delete</button>
              </ul>
             
            </div>
            
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DeleteReview