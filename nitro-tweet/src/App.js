import React from 'react';
import './App.css';
import Navbar from "./compontents/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./compontents/pages/HomePage/Home";
import Services from "./compontents/pages/Services/Services";
import Footer from "./compontents/pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/services"} component={Services}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
