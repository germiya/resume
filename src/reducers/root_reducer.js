import  {combineReducers} from 'redux';

import { routerReducer } from 'react-router-redux';

import AppReducer from './app_reducer';
 

const rootReducer = combineReducers({
   routing:routerReducer,
   AppReducer 
})

export default rootReducer;