import React from 'react';

const Blue = () => {

    const reviews = [
        {
            title:'Artist',
            rate:5,
            review:'Love it, it’s the Best.I can’t live without it!'
        }
        ,
        {
            title:'Producer',
            rate:4,
            review:'Love it, it’s the Best.I can’t live without it!'
        }
        ,
        {
            title:'Music Fan',
            rate:4,
            review:'Love it, it’s the Best.I can’t live without it!'
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
           <div className="speaker">
                <img style={{marginRight:'4rem'}} src="https://res.cloudinary.com/jeremiahcanlas/image/upload/v1618087246/speer/speaker1_ufxhey.png" alt="speaker"/>
                <img style={{marginLeft:'4rem'}}  src="https://res.cloudinary.com/jeremiahcanlas/image/upload/v1618086685/speer/speaker2_lcrqag.png" alt="speaker"/>
           </div>
           <div className="review-container">
            <h1>REVIEWS</h1>
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
