import React from 'react';

const Black = () => {
    return (
        <div className='black'>
            <div className="black-content">
                <h1>PERKS</h1>
                <div className="perks">
                    <div className='perk'>
                        <div className="border" style={{borderColor:'#D34848'}}></div>
                        <h3 style={{color:'#D34848'}}>Subscription Payment Model</h3>
                        <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className='perk' >
                        <div className="border" style={{borderColor:'#1FE1E9'}}></div>
                        <h3 style={{color:'#1FE1E9'}}>No Fee Cancellation Policy</h3>
                        <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className='perk'>
                        <div className="border" style={{borderColor:'#FFB33F'}}></div>
                        <h3 style={{color:'#FFB33F'}}>Subscription Payment Model</h3>
                        <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Black;
