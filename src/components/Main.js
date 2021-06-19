import React,{useEffect} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Hero from './Hero'
import Sound from './Sound'
import Yellow from './Yellow'
import Blue from './Blue'
import Black from './Black'
import {useLocation} from'react-router-dom'
import '../styles/main.scss'



const Main = ({getCompo,getPath,isMobile}) => {
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
            offset={{bottom:10}}
            partialVisibility
        >
            <Hero/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'sound','#D34848')
            }}
            offset={{bottom:10}}
            partialVisibility
        >
            <Sound/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'yellow','#FFB33F')
            }}
            offset={{bottom:10}}
            partialVisibility
        >
            <Yellow isMobile={isMobile}/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'black','white')
            }}
            offset={{bottom:10}}

            partialVisibility
        >
            <Black/>
        </VisibilitySensor>

        <VisibilitySensor
            onChange={isVisible => {
            getCompo(isVisible&&'blue','#1FE1E9')
            }}
            offset={{top:10}}

            partialVisibility
        >
            <Blue/>
        </VisibilitySensor>
      </div>
    );
}

export default Main;
