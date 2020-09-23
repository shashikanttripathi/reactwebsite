import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from "./Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Contact from "./Contact"
import Service from "./Service"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          {/* <Route exact path='/about' component={About}></Route> */}
          <Route exact path='/what-we-do' component={Service}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
