import React,{Fragment} from 'react';
import Black from './Black'
import TryItNow from './buttons/TryItNow';

const Footer = ({path}) => {
    const year = new Date();

    return (
        <div className='footer' style={{height:path ==='/checkout'&&'30vh'}}>
            <div className='footer-black' style={{display:path === '/checkout'&&'none'}}>
            {
                path === '/price'?(
                    <Black />
                ):(
                    <Fragment>
                        <div className='content'>
                            <h1 className='fancy'>GET EXP.RALLY NOW</h1>
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
                    <p>SUPPORT@EXPERIENCERALLY.COM</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h1 className='fancy'>EXP.RALLY</h1>
                    <p> {year.getFullYear()} &copy; By yours truly, Jeremiah Canlas ⚡️</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
