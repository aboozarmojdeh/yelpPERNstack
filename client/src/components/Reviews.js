import React from 'react'
import StarRating from './StarRating'

const Reviews = ({reviews}) => {
    const reviewMap=reviews.map((review)=>{
        return(
            <div key={review.id} className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>{review.name}</span>
                <span><StarRating rating={review.rating}/></span>
            </div>
            <div className="card-body">
            
              <p className="card-text">{review.review}</p>
            </div>
          </div>  
        )
    })
    return (
        <div className='row row-cols-3 mb-2'>
            {reviewMap}
        {/* <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
  <div className="card-header d-flex justify-content-between">
      <span>Aboozar</span>
      <span><StarRating rating={1.5}/></span>
  </div>
  <div className="card-body">
  
    <p className="card-text">The restaurant was awesome</p>
  </div>
</div> */}
</div>
    )
}

export default Reviews
