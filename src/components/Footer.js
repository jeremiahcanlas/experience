import React,{Fragment} from 'react';
import TryItNow from './buttons/TryItNow';

const Footer = ({path}) => {
    const year = new Date();

    return (
        <div className='footer' style={{height:path ==='/checkout'&&'30vh'}}>
            <div className='footer-black' style={{display:path === '/checkout'&&'none'}}>
            {
                path === '/price'?(
                    <div className='footer-perks'>
                        <h1 className='perks-header'>PERKS</h1>
                        <div className="perks">
                            <div className='perk'>
                                <div className="border" ></div>
                                <h3 >Subscription Payment Model</h3>
                                <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                            <div className='perk' >
                                <div className="border" ></div>
                                <h3 >No Fee Cancellation Policy</h3>
                                <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                            <div className='perk'>
                                <div className="border" ></div>
                                <h3 >Subscription Payment Model</h3>
                                <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                        </div>
                    </div>
                ):(
                    <Fragment>
                        <div className='content'>
                            <h1>GET EXP|CON NOW</h1>
                            <p>Purchase and download the app</p>
                        </div>
                        <div className='footer-btn'>
                            <TryItNow/>                    
                        </div>
                    </Fragment>
                )
            }

            </div>
            <div className='footer-purple'>
                <div>
                    <i className='fa fa-envelope'></i>
                    <p>support@experienceconcerts.co</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h1>exp|con</h1>
                    <p> {year.getFullYear()} &copy; By yours truly, Jeremiah Canlas</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
