import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

 

import {Provider} from 'react-redux';
import configureStore from './store/configure_store'; 

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('root');
    const store = configureStore({name:" About: GERMIYA JOSE"});
   // console.log(store)
    //ReactDOM.render(<App/>, node);
    
     ReactDOM.render( 
        <Provider store={store}>
          <App />
            </Provider>
, node);
    
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
