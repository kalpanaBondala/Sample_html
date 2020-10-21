import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import {Button} from 'react-bootstrap';
// import {Card} from 'reactstrap';
import Home from './Routing/Home';
import AboutUs from './Routing/AboutUs';
import ContactUs from './Routing/ContactUs';

import { BrowserRouter as Router, Route, Link, Switch }  from 'react-router-dom';

 class App extends React.Component{
  

    render() {

      return(
        
          <Router>
          <div className="App">
           
          <ul>
             <li><Link to="/Home"> Home </Link></li>
             <li><Link to="/ContactUs"> ContactUs </Link></li>
             <li><Link to="/AboutUs"> AboutUs </Link></li>
            </ul>
            <switch>
            <Route path="/Home" Component={Home} />
            <Route path="/ContactUs" Component={ContactUs} />
            <Route path="/AboutUs" Component={AboutUs} />
            </switch>
            </div>
            </Router>
        

      );
    }
 }


export default App;     