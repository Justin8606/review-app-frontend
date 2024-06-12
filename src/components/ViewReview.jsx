import axios from 'axios'
import React, { useState } from 'react'

const ViewReview = () => {
    
    const [data,changeData] = useState(
        [
            {
                "_id": "6669d8dee519b4d0eca80890",
                "name": "Aavesham",
                "year": "2024",
                "duration": "2.5",
                "rating": "4.7",
                "__v": 0
            },
            {
                "_id": "6669d961ba4ff99fe9473068",
                "name": "varshangalk shesham",
                "year": "2024",
                "duration": "2.7",
                "rating": "4.8",
                "__v": 0
            },
            {
                "_id": "6669fe44cb272c61ad7e5790",
                "name": "inception",
                "year": "2013",
                "duration": "2",
                "rating": "5",
                "__v": 0
            }
        ]
    )
    // const fetchdata = ()=>{
    //     axios.post("http://localhost:8080/view").then((response)=>{
            
    //     })
    // }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                    {
                        data.map(
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