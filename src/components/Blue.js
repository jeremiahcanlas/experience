import React from 'react';
import image from '../utils/img/rating.png'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Blue = ({isMobile}) => {


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

            
            stars.push(
            <Bounce delay={(i+14)*100} duration={400} key={i+2}>
                <i  className='fa fa-star'></i>
            </Bounce>
            ) 
        }

        return stars
    }


    return (
       <div className="blue">
            <img src={image} alt="thumbs up" />
           <div className="review-container">
            <Fade duration={800} delay={500}>
                <h1 className='fancy'>REVIEWS</h1>
            </Fade>
            <div className="reviews">
                {reviews.map((i,index) => 
                <Fade left={isMobile?true:false} bottom={!isMobile?true:false}  delay={(index+1)*90} duration={1000} key={index+2}>
                    <div className='review' >
                        <div className="stars">
                        {rating(i.rate)}
                        </div>
                        <h3>{i.title.toUpperCase()}</h3>
                        <p>"{i.review}"</p>
                    </div>
                </Fade>
                )}
            </div>
           </div>
       </div>
    );
}

export default Blue;
