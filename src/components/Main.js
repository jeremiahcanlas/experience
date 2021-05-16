import React,{useEffect} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Hero from './Hero'
import Sound from './Sound'
import Yellow from './Yellow'
import Blue from './Blue'
import Black from './Black'
import {useLocation} from'react-router-dom'



const Main = ({getCompo,getPath}) => {
const {pathname} = useLocation()


useEffect(()=>{
getPath(pathname)
},[])

useEffect(() =>{
getCompo('','white')
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
        >
            <Yellow/>
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
            <Blue/>
        </VisibilitySensor>
      </div>
    );
}

export default Main;
