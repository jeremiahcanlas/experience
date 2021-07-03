import React,{Fragment} from 'react';
import Black from './Black'
import Button from './buttons/Button';
import Fade from 'react-reveal/Fade';

const Footer = ({path}) => {
    const year = new Date();

    return (
        <div className='footer' style={{scrollSnapAlign:path === '/price'&&'none'}} >
            <div className='footer-black' style={{display:path === '/checkout'?'none':path === '/perks'&&'none'}}>
            {
                path === '/price'?(
                    <Black footer />
                ):(
                    <Fragment>
                        <div className='content'>
                            <Fade bottom duration={1000} delay={500}>
                                <h1 className='fancy'>GET EXP.RALLY NOW</h1>
                            </Fade>
                            <Fade bottom duration={1000} delay={1000}>
                                <p>Purchase and download the app</p>
                            </Fade>
                        </div>
                        <div className='footer-btn'>
                            <Button name={'try it now'}  duration={1000}/>                    
                        </div>
                    </Fragment>
                )
            }

            </div>
            <div className='footer-purple'>
                <Fade left duration={1000} delay={500}>
                    <div>
                        <i className='fa fa-envelope'></i>
                        <p>SUPPORT@EXPERIENCERALLY.COM</p>
                    </div>
                </Fade>
                <div style={{textAlign:'center'}}>
                    <Fade  duration={1000} delay={700}>
                        <h1 className='fancy'>EXP.RALLY</h1>
                    </Fade>
                    <Fade  duration={1000} delay={1200}>
                        <p> {year.getFullYear()} &copy; By yours truly, Jeremiah Canlas 🌶️</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Footer;
