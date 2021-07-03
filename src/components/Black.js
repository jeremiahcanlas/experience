import React from 'react';

const Black = ({footer}) => {

    

    const perks = [
        {
            title:'Subscribe Anytime',
            color:'#17BEBB',
            content:'You can subcscribe anytime, and watch your favourite team!'
        },
        {
            title:'No Cancellation Fee ',
            color:'#CD5334',
            content:'Have stress-free cancellation without any hidden fees.'
        },
        {
            title:'Satisfaction Guranteed',
            color:'#DAFEB7',
            content:'If you\'re not happy, we\'ll glady give you a refund at full cost!'
        }
    ]



    return (
        <div className='black' style={{scrollSnapAlign:footer?'none':'start'}}>
            <div className="black-content">
                <div className="perks">
                    {
                        perks.map((perk,index) => 
                            <div className='perk' key={index}>
                                <div className="border" style={{borderColor:`${perk.color}`}}></div>
                                <h3 style={{color:`${perk.color}`}}>{perk.title}</h3>
                                <p>{perk.content}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Black;
