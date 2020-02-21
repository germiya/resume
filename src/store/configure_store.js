import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'; 
import rootReducer from '../reducers/root_reducer';
import rootSaga from '../sagas/root_saga';

 

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [sagaMiddleware,
         ];

    const composedEnhancers = compose(
        applyMiddleware(...middleware)
    )
    const store = createStore(rootReducer,
        initialState,
        composedEnhancers

    );

    sagaMiddleware.run(rootSaga);

    return store;
}