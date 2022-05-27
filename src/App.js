import './App.css';
import React from 'react';

// import {  Link, Route, Routes, Router} from 'react-router-dom';
// 이건 안돼

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//  이건 돼

import Header from './Pages/Header';
import Main from './Pages/Main'


import Home from './Pages/Home';
import About from './Pages/About';
import Example3Page from './Pages/Example3Page';

function App() {

  return (  
    //  

    //     {/* <TopHeader/> */}
    //     <Header/>
    //     <hr></hr>
    //     {/* <Route exact path = "/" component={} />
    //     <Route path="/about" component={About} />
    //     <Route path*/}
        
    //     {/* <Main/>  */}

    //     <div>
    //       <Route exact path="/" component={Home}/>
    //       <Route path="/about" component={About}/>

    //       {/* <Route path="/03page" component={Example3Page}/> */}
    //     </div>
    // </Router>


      <Router> 
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/03page" element={<Example3Page/>}/>
        </Routes>
      </Router> 

          

          // {/* <Route exact path="/" component={Home}/> */}
          // {/* <Switch>
          //     <Route path="/about/:name" component={About}/>
          //     <Route path="/about" component={About}/>
          // </Switch> */}
          // {/* <Route path="/about/:name" component={About}/>
          // <Route path="/about" component={About}/> */}

  );
}

export default App;
