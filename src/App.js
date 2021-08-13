import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import Header from "./header"
import Footer from "./footer"
import Home from "./home"
import About from "./about"
import Player from "./player"
import Coach from "./coach"
import Contact from "./contact"


function App() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="/player"><Player/></Route>
            <Route exact path="/coach"><Coach/></Route>
            <Route exact path="/contact"><Contact/></Route>
          </Switch>
        <Footer/>
      </Router> 
    </> 
  );
}

export default App;
