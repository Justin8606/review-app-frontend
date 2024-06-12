import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewReview = () => {
    
    const [review,changeReview] = useState([])

    const fetchdata = ()=>{
        axios.post("http://localhost:8080/view").then((response)=>{
            changeReview(response.data)
        }).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    
    useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                    {
                        review.map(
                            (value,index)=>{
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
          </ul>
         
        </div>
        
                                </div>
                            }
                        )
                    }
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewReview