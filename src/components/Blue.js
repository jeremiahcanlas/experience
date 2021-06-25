import React from 'react';
import image from '../utils/img/rating.png'

const Blue = () => {

    const reviews = [
        {
            title:'Subaru Fan',
            rate:5,
            review:'This is a great subscription service!'
        }
        ,
        {
            title:'Ford',
            rate:5,
            review:'Mind-blowing quality! Highly Recommend! '
        }
        ,
        {
            title:'Hyundai',
            rate:5,
            review:'Outstanding customer service and live stream quality is phenomenal'
        }
    ]


    //will render star icons depends on rating
    const rating = (rate) => {
        let stars = []

        for(let i = 0; i < rate; i++){
            stars.push(<i key={i} className='fa fa-star'></i>) 
        }

        return stars
    }


    return (
       <div className="blue">
            <img src={image} alt="thumbs up" />
           <div className="review-container">
            <h1 className='fancy'>REVIEWS</h1>
            <div className="reviews">
                {reviews.map((i,index) => 
                    <div className='review' key={index}>
                        <div className="stars">
                        {rating(i.rate)}
                        </div>
                        <h3>{i.title.toUpperCase()}</h3>
                        <p>"{i.review}"</p>
                    </div>
                )}
            </div>
           </div>
       </div>
    );
}

export default Blue;
