import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Counter from './Counter/Counter';
//import listofcards from './bootstrap_card/listofcards';
// import Form from './Form/Form';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
//import Productinfo from './ProductInfo/ProductInfo';



ReactDOM.render(
  <React.StrictMode>
     {/* <Counter/>  */}
     <BrowserRouter>
     <App/> 
     </BrowserRouter>
     
    {/* <Form/>  */}
    {/* <Productinfo/> */}

    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
