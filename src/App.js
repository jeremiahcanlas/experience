import React,{useState} from 'react'
import './styles/app.scss'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'
import Price from './components/Price'
import Payment from './components/Payment'

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import useWindowDimensions from './utils/viewport'


function App() {

  const {height,width}  = useWindowDimensions()

  //this will check if viewport width is less than 688px
  const isMobile = width < 688;

  //sets which components are on viewport
  const[component,setComponent]=useState('')
  //sets which path is the user currently on
  const [path,setPath] = useState('')
  //sets which tier was selected 
  const [tier,setTier] = useState('')
 
  //sets path function
  const getPath = path => {
    setPath(path)
  }

  //sets component
  const getCompo = (compo,color) => { //this will retrieve which component its in and the color
    setComponent({
      compo,
      color
    })
  }

  //sets tier
  const getTier = tier => {
    setTier(tier)
  }
  
  return (
    
    <div className="App app-main">
      <Router basename={process.env.PUBLIC_URL}>
        <Nav component={component} path={path}/>
        <ScrollToTop/> 
        <Switch>
          <Route path='/' exact  render={() => <Main getCompo={getCompo} isMobile={isMobile} getPath={getPath}/>}/>
          <Route path='/price' render={() => <Price getPath={getPath} getCompo={getCompo} isMobile={isMobile} getTier={getTier}/>}/>
          <Route path='/checkout' render={() => <Payment tier={tier} getPath={getPath} getCompo={getCompo} getTier={getTier}/>} />
        </Switch>
          <Footer  path={path} getCompo={getCompo}/>
      </Router>
    </div>
    
  );
}

export default App;
