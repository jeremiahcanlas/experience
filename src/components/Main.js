import React,{useEffect} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Hero from './Hero'
import Sound from './Sound'
import Yellow from './Yellow'
import Blue from './Blue'
import Black from './Black'
import {useLocation} from'react-router-dom'
import '../styles/main.scss'



const Main = ({getCompo,getPath,isMobile,component}) => {
const {pathname} = useLocation()


useEffect(()=>{
getPath(pathname)

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

useEffect(() =>{
getCompo('','white')


// eslint-disable-next-line react-hooks/exhaustive-deps
},[])



    return (

      <div className='main'>
        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'hero','white')
            }}
            
        >
            <Hero/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'sound','#D34848')
            }}
            
            
        >
            <Sound/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'yellow','#FFB33F')
            }}
            partialVisibility
        >
            <Yellow isMobile={isMobile} component={component}/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'black','white')
            }}
            
            
        >
            <Black/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'blue','#1FE1E9')
            }}
            
        >
            <Blue isMobile={isMobile}/>
        </VisibilitySensor>
      </div>
    );
}

export default Main;
